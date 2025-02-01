import { resolve } from "node:path";
import { fileURLToPath, URL } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      $src: fileURLToPath(new URL("./static/src", import.meta.url)),
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
