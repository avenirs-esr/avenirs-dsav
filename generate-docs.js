import fs from 'node:fs'
import path from 'node:path'

/**
 * PATHS
 */
const componentsDir = path.resolve('src/components')
const docsComponentsDir = path.resolve('docs/components')
const stylesComponentsDir = path.resolve('src/styles/components')
const docsStylesComponentsDir = path.resolve('docs/styles/components')
const stylesCoreDir = path.resolve('src/styles/core')
const docsStylesCoreDir = path.resolve('docs/styles/core')
const stylesUtilitiesDir = path.resolve('src/styles/utilities')
const docsStylesUtilitiesDir = path.resolve('docs/styles/utilities')
const rootReadme = path.resolve('README.md')
const docsReadme = path.resolve('docs/index.md')
const iconsPath = path.resolve('src/tokens/icons.ts')
const iconsReadme = path.resolve('docs/icons/index.md')
const tokensDir = path.resolve('src/styles/core')
const tokensReadme = path.resolve('docs/tokens/index.md')
const scssFiles = [
  { file: '_dimensions.scss', title: 'Dimensions' },
  { file: '_radius.scss', title: 'Radius' },
  { file: '_spacing.scss', title: 'Spacing' },
]

/**
 * UTILS
 */
function ensureDir (filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true })
}

/**
 * GENERATE COMPONENTS DOCS
 */
if (fs.existsSync(rootReadme)) {
  ensureDir(docsReadme)
  fs.copyFileSync(rootReadme, docsReadme)
  // eslint-disable-next-line no-console
  console.log(`📄 Copied root README.md → docs/index.md`)
}

function copyDocsRecursive (srcDir, destDir) {
  if (!fs.existsSync(srcDir)) {
    return
  }

  fs.readdirSync(srcDir, { withFileTypes: true }).forEach((dirent) => {
    const srcPath = path.join(srcDir, dirent.name)
    const destPath = path.join(destDir, dirent.name)

    if (dirent.isDirectory()) {
      copyDocsRecursive(srcPath, destPath)
    }
    else if (dirent.isFile() && dirent.name.endsWith('.md')) {
      ensureDir(destPath)
      fs.copyFileSync(srcPath, destPath)
      // eslint-disable-next-line no-console
      console.log(`📄 Copied ${srcPath} → ${destPath}`)
    }
  })
}

/**
 * GENERATE ICONS DOCS
 */
function extractIcons (blockName) {
  if (!fs.existsSync(iconsPath)) {
    return []
  }
  const iconsFile = fs.readFileSync(iconsPath, 'utf8')
  const regex = new RegExp(`export const ${blockName}\\s*=\\s*{([\\s\\S]*?)};?`, 'm')
  const match = iconsFile.match(regex)
  if (!match) {
    return []
  }
  const objectContent = match[1]
  return [...objectContent.matchAll(/(\w+):\s*'([^']+)'/g)]
    .map(([_, name, value]) => ({ name, value }))
}

function renderIconsTable (title, iconPrefix, icons) {
  if (!icons.length) {
    return ''
  }
  let md = `\n## ${title}\n`
  md += `| Preview | ${iconPrefix} Name | ${iconPrefix === 'ICONS_DATA_URL' ? 'Inline SVG' : 'Iconify Code'} |\n`
  md += '| --- | --- | --- |\n'
  icons.forEach(({ name, value }) => {
    if (value.startsWith('data:image')) {
      md += `| <img src="${value}" width="20" height="20" /> | ${name} | Inline SVG |\n`
    }
    else {
      const iconUrl = `https://api.iconify.design/${value.replace(':', '/')}.svg`
      md += `| ![${value}](${iconUrl}) | ${name} | \`${value}\` |\n`
    }
  })
  return md
}

function generateIconsDoc () {
  const mdiIcons = extractIcons('MDI_ICONS')
  const riIcons = extractIcons('RI_ICONS')
  const customIcons = extractIcons('ICONS_DATA_URL')

  let md = `# Icons

_Last updated: ${new Date().toISOString().split('T')[0]}_

Generated automatically from \`src/tokens/icons.ts\`.

This file allows you to know all the current icons added as tokens in DSAV.
`

  md += renderIconsTable('MDI Icons', 'MDI_ICONS', mdiIcons)
  md += renderIconsTable('Remix Icons', 'RI_ICONS', riIcons)
  md += renderIconsTable('Custom icons', 'ICONS_DATA_URL', customIcons)

  ensureDir(iconsReadme)
  fs.writeFileSync(iconsReadme, md)
  // eslint-disable-next-line no-console
  console.log(`📄 icons readme generated at ${iconsReadme}`)
}

/**
 * GENERATE TOKENS DOCS
 */
function parseScssTokens (filePath) {
  const content = fs.readFileSync(filePath, 'utf8')
  const regex = /(--[\w-]+):\s*([\d.]+rem);\s*\/\*\s*(\d+)px\s*\*\//g
  return [...content.matchAll(regex)]
    .map(([, name, rem, px]) => ({ name, rem, px }))
}

function parseSpacingTokens (filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /(\w+):\s*([\d.]+rem|0),\s*\/\*\s*(\d+)px\s*\*\//g;
  return [...content.matchAll(regex)].map(([, name, rem, px]) => ({
    name: `--spacing-${name}`,
    rem,
    px
  }));
}

function renderTokensTable (title, tokens) {
  if (!tokens.length) {
    return ''
  }
  let md = `\n## ${title}\n\n`
  md += '| Token | Value (rem) | Value (px) |\n'
  md += '| --- | --- | --- |\n'
  tokens.forEach(({ name, rem, px }) => {
    md += `| ${name} | ${rem} | ${px}px |\n`
  })
  return md
}

function generateTokensDoc () {
  let md = `# Tokens

_Last updated: ${new Date().toISOString().split('T')[0]}_

Generated automatically from SCSS tokens.
`
  scssFiles.forEach(({ file, title }) => {
    const filePath = path.join(tokensDir, file)
    if (!fs.existsSync(filePath)) {
      return
    }
    const tokens = file === '_spacing.scss' ? parseSpacingTokens(filePath) : parseScssTokens(filePath)
    md += renderTokensTable(title, tokens)
  })

  ensureDir(tokensReadme)
  fs.writeFileSync(tokensReadme, md)
  // eslint-disable-next-line no-console
  console.log(`📄 Tokens readme generated at ${tokensReadme}`)
}

/**
 * RUN DOCS GENERATIONS
 */
copyDocsRecursive(componentsDir, docsComponentsDir)
copyDocsRecursive(stylesComponentsDir, docsStylesComponentsDir)
copyDocsRecursive(stylesCoreDir, docsStylesCoreDir)
copyDocsRecursive(stylesUtilitiesDir, docsStylesUtilitiesDir)
generateIconsDoc()
generateTokensDoc()
