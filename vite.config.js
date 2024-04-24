import * as path from 'path'
import { defineConfig } from 'vite'

const projectRootDir = path.resolve(__dirname)
const resolve = p => path.resolve(projectRootDir, p)

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/main.js'),
      formats: ['es'],
      fileName(format) {
        return `main.${format}.js`
      },
    },
    minify: true,
  },
})
