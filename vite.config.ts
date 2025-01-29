import { resolve } from "node:path";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [svelte(), Icons({ autoInstall: true, compiler: "svelte" })],
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
