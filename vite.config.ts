import { resolve } from "node:path";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    svelte({ preprocess: vitePreprocess() }),
    tsconfigPaths(),
  ],
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
