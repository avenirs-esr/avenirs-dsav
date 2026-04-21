// https://vitejs.dev/config/
// import path from 'node:path'
/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import svgLoader from 'vite-svg-loader'
// eslint-disable-next-line no-restricted-imports
import autoImportConfig from './auto-import-config.json' with { type: 'json' }

// const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    svgLoader(),
    AutoImport({
      include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
      imports: [{ vue: autoImportConfig.vue }, 'vue-router'],
      vueTemplate: true,
      dts: './src/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({
      extensions: ['vue'],
      dirs: ['src/components'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: './src/components.d.ts',
    })
  ],
  build: {
    lib: {
      entry: {
        'index': 'src/index.ts',
        'test-utils': 'src/tests/index.ts',
      }
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-router',
        'vitest',
        '@vue/test-utils',
        /^@tiptap\/.*/,
        '@vueuse/core',
        'date-fns',
        'focus-trap',
        'focus-trap-vue',
        'lodash-es',
      ],
      output: {
        exports: 'named',
        dir: 'dist',
        preserveModules: true
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js',
    },
  },
})
