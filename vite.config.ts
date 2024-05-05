import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({
      tsconfigPath: './tsconfig.json',
      rollupTypes: false,
      // entryRoot: './src/main.ts',
      copyDtsFiles: true,
      staticImport: true,
      // declarationOnly: true,
      outDir: 'dts',
      // insertTypesEntry: true,
      
    }),
    vue()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'BoilderPlateLib',
      formats: ['es'],
      fileName: 'boilerplate-dts-lib',
    }
  }
})
