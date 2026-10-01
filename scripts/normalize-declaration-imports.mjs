import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const distDirectory = path.resolve(new URL('../dist', import.meta.url).pathname)

async function declarationFiles (directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = []

  for (const entry of entries) {
    const entryPath = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      files.push(...await declarationFiles(entryPath))
    }
    else if (entry.name.endsWith('.d.ts')) {
      files.push(entryPath)
    }
  }

  return files
}

const aliasImportPattern = /(['"])@\/([^'"\\]+)\1/g

for (const filePath of await declarationFiles(distDirectory)) {
  const source = await readFile(filePath, 'utf8')
  const normalized = source.replace(aliasImportPattern, (_match, quote, target) => {
    let relativePath = path.relative(path.dirname(filePath), path.join(distDirectory, target))
    if (!relativePath.startsWith('.')) {
      relativePath = `./${relativePath}`
    }
    return `${quote}${relativePath}${quote}`
  })

  if (normalized !== source) {
    await writeFile(filePath, normalized)
  }
}
