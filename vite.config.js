import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
//import '@fontsource-variable/caveat'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (asset) => {
          const name = asset.name?.toLowerCase() ?? ''
          if (name.match(/\.(woff2?|ttf|otf|eot)$/)) {
            return 'assets/fonts/[name]-[hash][extname]'
          }
          if (name.match(/\.css$/)) {
            return 'assets/css/[name]-[hash][extname]'
          }
          if (name.match(/\.(png|jpe?g|gif)$/)) {
            return 'assets/images/[name]-[hash][extname]'
          }
          if (name.match(/\.svg$/)) {
            return 'assets/svg/[name]-[hash][extname]'
          }

          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
