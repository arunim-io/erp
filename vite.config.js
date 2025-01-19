import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
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
