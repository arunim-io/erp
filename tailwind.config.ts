import { Config } from "tailwindcss";

const config: Config = {
  content: ["./templates/**/*.html", "./static/src/**/*.{html,js,svelte}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
