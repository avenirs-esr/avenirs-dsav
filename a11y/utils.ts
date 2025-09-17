import fs from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

import { AxeBuilder } from '@axe-core/playwright'
import { expect, test } from '@playwright/test'
import { createHtmlReport } from 'axe-html-reporter'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export function testStories (component: string, title: string, stories: string[]) {
  stories.forEach((story) => {
    test(`${title} - ${story} should have no accessibility violations`, async ({ page }) => {
      const path = `${component}--${toKebabCase(story)}`
      const storyId = `${title.replace(/^\/|\/$/g, '').replace(/\//g, '-')}--${toKebabCase(story)}`.toLowerCase()
      await page.goto(`http://localhost:6006/iframe.html?id=${storyId}&viewMode=story`)

      // some rules are disabled because we only test components and not their integration in pages
      const rawAxeResults = await new AxeBuilder({ page })
        .disableRules(['landmark-one-main', 'page-has-heading-one', 'heading-order', 'region'])
        .analyze()

      if (rawAxeResults.violations.length > 0) {
        const reportHTML = createHtmlReport({
          results: rawAxeResults,
          options: {
            projectKey: `DSAV A11y Report - ${path}`,
            doNotCreateReportFile: true,
          },
        })
        const reportPath = resolve(__dirname, `reports/${path}.html`)
        console.warn('report created: ', reportPath)

        fs.mkdirSync(dirname(reportPath), { recursive: true })

        fs.writeFileSync(reportPath, reportHTML)
      }

      expect(rawAxeResults.violations.length, 'No accessibility violations').toBe(0)
    })
  })
}

/**
 *
 * @param text any text with uppercases
 * @returns a text in kebab-case
 * @example
 * 'DefaultStory' => 'default-story'
 * 'DefaultURLStory' => 'default-url-story'
 */
export function toKebabCase (text: string): string {
  return text
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
    .toLowerCase()
}
