import antfu from "@antfu/eslint-config";

export default antfu({
  ignores: ["./backend/", ".env.json"],
  stylistic: {
    quotes: "double",
    semi: true,
  },
  formatters: true,
  toml: false,
  react: true,
});
