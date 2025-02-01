import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: ["**/templates/**/*.html", "**/*.toml"],
  stylistic: {
    quotes: "double",
    semi: true,
  },
  vue: true,
});
