import defaultTheme from "tailwindcss/defaultTheme";
import typographyPlugin from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          100: "#03A65A",
          200: "#89CDB9",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            h1: {
              marginTop: "0",
              marginBottom: "0.5em",
            },
            h2: {
              marginTop: "0em !important",
              marginBottom: "0.5em !important",
            },
            p: {
              marginTop: "1.0em !important",
              marginBottom: "1.0em !important",
            },
            "ul > li": {
              marginTop: "0.5em !important",
              marginBottom: "0.5em !important",
            },
            a: {
              color: theme("colors.primary.100"),
              "&:hover": {
                color: theme("colors.primary.200"),
              },
            },
            pre: {
              backgroundColor: theme("colors.gray.800"),
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.100"),
              color: theme("colors.gray.800"),
              padding: "0.2em 0.4em",
              borderRadius: "0.25em",
            },
          },
        },
      }),
    },
  },
  plugins: [typographyPlugin],
};
