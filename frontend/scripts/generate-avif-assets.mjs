import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const assetsDir = path.resolve('public/case-assets')
const quality = 62
const effort = 4
const minSavingsRatio = Number.NEGATIVE_INFINITY
const skipNames = new Set(['brand-logo.png', 'brand-logo.webp', 'studio-portrait.webp'])

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) return collectImages(fullPath)
      if (!entry.isFile() || !entry.name.toLowerCase().endsWith('.webp')) return []
      if (skipNames.has(entry.name)) return []
      return [fullPath]
    }),
  )

  return files.flat()
}

async function generateAvif(file) {
  const avifFile = file.replace(/\.webp$/i, '.avif')
  const before = await stat(file)
  const buffer = await sharp(file).rotate().avif({ quality, effort }).toBuffer()
  const savingsRatio = (before.size - buffer.length) / before.size

  if (savingsRatio < minSavingsRatio) {
    return { written: false, before: before.size, after: before.size }
  }

  await sharp(buffer).toFile(avifFile)
  return { written: true, before: before.size, after: buffer.length }
}

const files = await collectImages(assetsDir)
let written = 0
let beforeTotal = 0
let afterTotal = 0

for (const file of files) {
  const result = await generateAvif(file)
  beforeTotal += result.before
  afterTotal += result.after
  if (result.written) written += 1
}

const mb = (bytes) => `${(bytes / 1024 / 1024).toFixed(2)}MB`
console.log(`Scanned ${files.length} WebP images`)
console.log(`Generated ${written} AVIF images`)
console.log(`Equivalent transfer ${mb(beforeTotal)} -> ${mb(afterTotal)}, saved ${mb(beforeTotal - afterTotal)}`)
