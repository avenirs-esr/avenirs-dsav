import { fileURLToPath, URL } from 'node:url'
import { configDefaults, coverageConfigDefaults, defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default () => {
  const sharedExclusions = [
    'e2e/*',
    'a11y/*',
    '**/*types.ts',
    '**/*stub.ts',
    '**/*stubs.ts',
    '**/*index.ts',
    '**/*main.ts',
    '**/*.stories.ts',
    'src/common/types/*',
    'src/api/**/generated/*',
    'orval.config.ts',
    'src/App.vue',
    'public/mockServiceWorker.js',
    'src/__mocks__/*',
    'storybook-static/*',
    'generate-docs.js',
  ]

  const COVERAGE_THRESHOLD = 85
  return mergeConfig(
    viteConfig,
    defineConfig({
      test: {
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, ...sharedExclusions],
        root: fileURLToPath(new URL('./', import.meta.url)),
        setupFiles: [
          fileURLToPath(new URL('./vitest-setup.ts', import.meta.url)),
        ],
        coverage: {
          provider: 'v8',
          reporter: ['text', 'html'],
          exclude: [...coverageConfigDefaults.exclude, ...sharedExclusions],
          thresholds: {
            branches: COVERAGE_THRESHOLD,
            functions: COVERAGE_THRESHOLD,
            lines: COVERAGE_THRESHOLD,
            statements: COVERAGE_THRESHOLD,
          },
        },
      },
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url)),
          'tests': fileURLToPath(new URL('./tests', import.meta.url))
        },
        dedupe: ['vue'],
      },
    }),
  )
}
