// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";

export default defineConfig({
  site: "https://carloshdrp.com.br",

  i18n: {
    locales: ["pt-br", "en"],
    defaultLocale: "pt-br",
    routing: {
      prefixDefaultLocale: false,
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
    robotsTxt(),
    webmanifest({
      name: "Carlos Henrique - Desenvolvedor Web",
      icon: "public/favicon.svg",
      short_name: "Carlos Henrique",
      description:
        "Desenvolvedor Full Stack formado no curso técnico de Informática para Internét e cursando Análise e Desenvolvimento de Sistemas, focado em criar soluções eficientes e funcionais",
      start_url: "/",
      theme_color: "#03A65A",
      background_color: "#111827",
      display: "standalone",
    }),
    (await import("@playform/compress")).default(),
  ],
});
