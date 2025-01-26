import { resolve } from "node:path";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    svelte({ preprocess: vitePreprocess() }),
  ],
  resolve: {
    alias: {
      $lib: resolve("./static/src/lib"),
    },
  },
  base: "/static/",
  root: resolve("./static/src"),
  build: {
    outDir: resolve("./static/dist"),
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve("./static/src/index.js"),
      },
    },
  },
});
