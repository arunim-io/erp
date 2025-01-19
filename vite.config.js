import { resolve } from 'path';
import { defineConfig } from 'vite';
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte({
      preprocess: vitePreprocess(),
    })
  ],
  base: '/static/',
  root: resolve('./static/src'),
  build: {
    outDir: resolve('./static/dist'),
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve('./static/src/index.js')
      }
    }
  }
});
