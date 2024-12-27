// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import webmanifest from "astro-webmanifest";

export default defineConfig({
  site: "https://carloshdrp.com.br",
  build: {
    assets: "_files/",
  },

  integrations: [
    tailwind(),
    sitemap(),
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
