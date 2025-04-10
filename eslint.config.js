import createConfig from "@antfu/eslint-config";
import tanstackRouterPlugin from "@tanstack/eslint-plugin-router";

export default createConfig({
  ignores: ["./backend/", ".env.json"],
  stylistic: {
    quotes: "double",
    semi: true,
  },
  formatters: true,
  toml: false,
  react: true,
}, ...tanstackRouterPlugin.configs["flat/recommended"]);
