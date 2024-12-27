import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import astroPlugin from "eslint-plugin-astro";
import prettierConfig from "eslint-config-prettier";

export default [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.astro"],
    plugins: {
      astro: astroPlugin,
    },
    languageOptions: {
      parser: astroPlugin.parser,
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
      globals: {
        Astro: "readonly",
        Fragment: "readonly",
      },
    },
    rules: {
      ...astroPlugin.configs.recommended.rules,
      "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/triple-slash-reference": "off",
    },
  },
  {
    files: ["**/*.ts"],
    ...tseslint.configs.recommended,
    rules: {
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  prettierConfig,
];
