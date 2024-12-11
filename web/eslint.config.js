import antfu from "@antfu/eslint-config";

export default antfu({
  formatters: true,
  unocss: true,
  react: true,
  astro: true,
  stylistic: {
    quotes: "double",
    semi: true,
  },
  typescript: {
    tsconfigPath: "tsconfig.json",
  },
});
