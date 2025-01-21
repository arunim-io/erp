import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: ["**/templates/**/*.html", "**/*.toml"],
  stylistic: {
    quotes: "double",
    semi: true,
  },
  formatters: true,
  svelte: true,
});
