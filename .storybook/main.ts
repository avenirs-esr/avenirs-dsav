import type { StorybookConfig } from '@storybook/vue3-vite'
import { defineConfig } from 'vite'

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  viteFinal: async (config) => {
    return defineConfig({
      ...config,
      base: '/avenirs-dsav/storybook/',
    })
  },
}
export default config
