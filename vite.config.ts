import react from "@vitejs/plugin-react";
import vike from "vike/plugin";
import UnoCSS from "unocss/vite";
import { UserConfig } from "vite";
import presetWebFonts from "@unocss/preset-web-fonts";
import presetUno from "@unocss/preset-uno";
import transformerDirectives from "@unocss/transformer-directives";
import mdx from "@mdx-js/rollup";
// @ts-ignore
import tokens from "lfds-tokens";

const config: UserConfig = {
  plugins: [
    vike({
      prerender: true,
    }),
    mdx(),
    react(),
    UnoCSS({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: "google",
          fonts: {
            sans: "Roboto",
            mono: "Roboto Mono",
          },
        }),
      ],
      theme: {
        colors: tokens.color,
      },
      transformers: [transformerDirectives()],
    }),
  ],
};

export default config;
