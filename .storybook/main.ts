import type { StorybookConfig } from '@storybook/vue3-vite'
import { defineConfig, type PluginOption } from 'vite'

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
    options: {
      docgen: {
        plugin: 'vue-component-meta',
        tsconfig: 'tsconfig.app.json',
      },
    }
  },
  viteFinal: async (config) => {
    // Workaround: vue-component-meta HMR hook reads virtual modules (\0 path) from disk and crashes
    const wrap = (option: PluginOption): PluginOption => {
      if (Array.isArray(option)) {
        return option.map(wrap)
      }
      if (!option || option instanceof Promise || option.name !== 'storybook:vue-component-meta-plugin') {
        return option
      }
      const original = option.handleHotUpdate
      if (typeof original !== 'function') {
        return option
      }
      return {
        ...option,
        handleHotUpdate (ctx) {
          if (ctx.file.includes('\0') || ctx.file.includes('virtual:')) {
            return
          }
          return original.call(this, ctx)
        },
      }
    }
    const plugins = (config.plugins ?? []).map(wrap)

    return defineConfig({
      ...config,
      plugins,
      base: '/avenirs-dsav/storybook/',
    })
  },
}
export default config
