import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

// === Configuration ===
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const INPUT_FILE = path.resolve('src/tokens/icons.ts')
const OUTPUT_FILE = path.join(__dirname, 'src/styles/components/_icons.scss')

const cuidaJson = JSON.parse(fs.readFileSync(
  path.resolve('node_modules/@iconify-json/cuida/icons.json'),
  'utf8'
))
const eosJson = JSON.parse(fs.readFileSync(
  path.resolve('node_modules/@iconify-json/eos-icons/icons.json'),
  'utf8'
))
const fluentJson = JSON.parse(fs.readFileSync(
  path.resolve('node_modules/@iconify-json/fluent/icons.json'),
  'utf8'
))
const ixIcons = JSON.parse(fs.readFileSync(
  path.resolve('node_modules/@iconify-json/ix/icons.json'),
  'utf8'
))
const mdiJson = JSON.parse(fs.readFileSync(
  path.resolve('node_modules/@iconify-json/mdi/icons.json'),
  'utf8'
))
const msJson = JSON.parse(fs.readFileSync(
  path.resolve('node_modules/@iconify-json/material-symbols/icons.json'),
  'utf8'
))
const riJson = JSON.parse(fs.readFileSync(
  path.resolve('node_modules/@iconify-json/ri/icons.json'),
  'utf8'
))

const COLLECTIONS = {
  'cuida': cuidaJson,
  'eos-icons': eosJson,
  'fluent': fluentJson,
  'ix': ixIcons,
  'mdi': mdiJson,
  'material-symbols': msJson,
  'ri': riJson
}

// === Get icons from tokens ===
function extractIcons (blockName) {
  if (!fs.existsSync(INPUT_FILE)) {
    return []
  }

  const iconsFile = fs.readFileSync(INPUT_FILE, 'utf8')
  const regex = new RegExp(`export const ${blockName}\\s*=\\s*{([\\s\\S]*?)};?`, 'm')
  const match = iconsFile.match(regex)

  if (!match) {
    return []
  }

  const objectContent = match[1]

  return [...objectContent.matchAll(/(\w+):\s*'([^']+)'/g)]
    .map(([_, name, value]) => ({ name, value }))
}

// === SVG fetching ===
function fetchSvg (iconValue) {
  const [prefix, id] = iconValue.split(':')
  const collection = COLLECTIONS[prefix]

  if (!collection) {
    console.warn(`⚠ Unknown icon collection: ${prefix}`)
    return
  }

  let icon = collection.icons[id]
  if (!icon) {
    console.warn(`⚠ Icon not found: ${iconValue}, checking aliases...`)

    const parent = collection.aliases[id].parent
    icon = parent ? collection.icons[parent] : null

    if (!icon) {
      console.warn(`⚠ Icon not found with aliases ${parent}: ${iconValue}`)
      return
    }
  }

  const width = icon.width ?? collection.width ?? 24
  const height = icon.height ?? collection.height ?? 24

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">${icon.body}</svg>`
}

// === SVG Data URI encoding ===
function svgToDataUri (svg) {
  const compactSvg = svg
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim()
    .replace(/"/g, '\'')

  const encodedSvg = encodeURIComponent(compactSvg)
    .replace(/%20/g, ' ')
    .replace(/%3D/g, '=')
    .replace(/%3A/g, ':')
    .replace(/%2F/g, '/')

  return `url("data:image/svg+xml,${encodedSvg}")`
}

// === SCSS generation ===
async function generate () {
  const CUIDA_ICONS = extractIcons('CUIDA_ICONS')
  const EOS_ICONS = extractIcons('EOS_ICONS')
  const FLUENT_ICONS = extractIcons('FLUENT_ICONS')
  const IX_ICONS = extractIcons('IX_ICONS')
  const MDI_ICONS = extractIcons('MDI_ICONS')
  const MS_ICONS = extractIcons('MS_ICONS')
  const RI_ICONS = extractIcons('RI_ICONS')
  const ALL_ICONS = [
    ...CUIDA_ICONS,
    ...EOS_ICONS,
    ...FLUENT_ICONS,
    ...IX_ICONS,
    ...MDI_ICONS,
    ...MS_ICONS,
    ...RI_ICONS
  ]

  // eslint-disable-next-line no-console
  console.log(`⏳ Generating ${ALL_ICONS.length} icons from local Iconify JSON...`)

  let scss = `/**
  * This file is auto-generated via \`npm run icons:generate\` and
  * the icons in XXX_ICONS from \`src/tokens/icons.ts\`.
  * Do not remove it and do not edit it directly.
  */
:root {\n`

  const generatedByDataUri = new Map()

  for (const { name, value } of ALL_ICONS) {
    const [prefix] = value.split(':')
    const varName = `--icon-${prefix.toLowerCase()}-${name.toLowerCase().replace(/_/g, '-')}`

    try {
      const svg = fetchSvg(value)
      if (!svg) {
        console.warn(`⚠ Skipping ${value}: no SVG`)
        continue
      }
      const dataUri = svgToDataUri(svg)

      const alreadyGeneratedVarName = generatedByDataUri.get(dataUri)
      if (alreadyGeneratedVarName) {
        scss += `  ${varName}: var(${alreadyGeneratedVarName});\n`
        // eslint-disable-next-line no-console
        console.log(`✔ Generated ${varName} (reusing ${alreadyGeneratedVarName})`)
        continue
      }

      scss += `  ${varName}: ${dataUri};\n`
      generatedByDataUri.set(dataUri, varName)
      // eslint-disable-next-line no-console
      console.log(`✔ Generated ${varName}`)
    }
    catch (err) {
      console.error(`❌ Error processing ${value}`, err)
    }
  }

  scss += `}\n`

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true })
  fs.writeFileSync(OUTPUT_FILE, scss)

  // eslint-disable-next-line no-console
  console.log(`\n🎉 Done! File written to: ${OUTPUT_FILE}`)
}

generate()
