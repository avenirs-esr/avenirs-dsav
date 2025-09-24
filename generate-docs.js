import fs from 'node:fs'
import path from 'node:path'

const componentsDir = path.resolve('src/components')
const docsComponentsDir = path.resolve('docs/components')
const rootReadme = path.resolve('README.md')
const docsReadme = path.resolve('docs/index.md')

if (!fs.existsSync(docsComponentsDir)) {
  fs.mkdirSync(docsComponentsDir, { recursive: true })
}

if (fs.existsSync(rootReadme)) {
  fs.mkdirSync(path.dirname(docsReadme), { recursive: true })
  fs.copyFileSync(rootReadme, docsReadme)
  // eslint-disable-next-line no-console
  console.log(`📄 Copied root README.md → docs/index.md`)
}

function copyDocsRecursive (srcDir, destDir) {
  fs.readdirSync(srcDir, { withFileTypes: true }).forEach((dirent) => {
    const srcPath = path.join(srcDir, dirent.name)
    const destPath = path.join(destDir, dirent.name)

    if (dirent.isDirectory()) {
      copyDocsRecursive(srcPath, destPath)
    }
    else if (dirent.isFile() && dirent.name.endsWith('.md')) {
      fs.mkdirSync(path.dirname(destPath), { recursive: true })
      fs.copyFileSync(srcPath, destPath)
      // eslint-disable-next-line no-console
      console.log(`📄 Copied ${srcPath} → ${destPath}`)
    }
  })
}

copyDocsRecursive(componentsDir, docsComponentsDir)
