import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss(), TanStackRouterVite({
    target: "react",
    autoCodeSplitting: true,
  })],
  resolve: {
    alias: {
      $src: resolve(__dirname, "./src"),
    },
  },
});
