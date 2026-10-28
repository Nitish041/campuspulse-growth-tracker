import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tmpdir } from 'node:os'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  cacheDir: resolve(tmpdir(), 'campuspulse-vite-cache'),
})
