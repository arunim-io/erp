import antfu from "@antfu/eslint-config";
import tailwind from "eslint-plugin-tailwindcss";

export default antfu({
  ignores: ["**/templates/**/*.html", "**/*.toml"],
  stylistic: {
    quotes: "double",
    semi: true,
  },
  formatters: true,
  svelte: true,
}, ...tailwind.configs["flat/recommended"]);
