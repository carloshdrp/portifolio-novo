// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import icon from "astro-icon";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "http://localhost:4321",

  i18n: {
    locales: ["pt-br", "en"],
    defaultLocale: "pt-br",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },

  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: "pt-br",
        locales: {
          "pt-br": "pt-BR",
          en: "en-US",
        },
      },
    }),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    icon(),
    mdx(),
  ],
});
