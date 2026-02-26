import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  // GitHub Pages では /<リポジトリ名>/ がベースになるため環境変数で制御
  // ローカル開発時は '/' のまま動作する
  base: process.env.VITE_BASE_PATH ?? '/',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    watch: {
      usePolling: true,
    },
  },
})
