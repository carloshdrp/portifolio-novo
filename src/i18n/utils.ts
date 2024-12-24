import { ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang in ui ? (lang as keyof typeof ui) : "pt-br";
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)["pt-br"]) {
    return ui[lang][key];
  };
}
