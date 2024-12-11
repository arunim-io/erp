import { defineConfig, presetIcons, presetWebFonts, presetWind, transformerVariantGroup } from "unocss";

export default defineConfig({
  transformers: [
    transformerVariantGroup(),
  ],
  presets: [
    presetWind({
      dark: {
        dark: "dark",
        light: "light",
      },
    }),
    presetIcons({
      autoInstall: true,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: "Roboto",
      },
    }),
  ],
});
