import type { SvelteConfig } from "@sveltejs/vite-plugin-svelte";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const config: SvelteConfig = {
  preprocess: vitePreprocess({ script: true }),
};

export default config;
