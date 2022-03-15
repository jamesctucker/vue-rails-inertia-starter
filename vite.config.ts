import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import Vue3Plugin from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    RubyPlugin(),
    Vue3Plugin(),
  ],
})
