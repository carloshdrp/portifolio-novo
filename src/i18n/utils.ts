import { ui } from "./ui";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  return lang && lang in ui ? (lang as keyof typeof ui) : "pt-br";
}

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}` | `${Key}.${string}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

type TranslationValue =
  | string
  | readonly string[]
  | { readonly [key: string]: TranslationValue };

export function useTranslations(lang: keyof typeof ui) {
  return function t(
    key: NestedKeyOf<(typeof ui)[typeof lang]>,
  ): string | string[] {
    const keys = key.split(".");

    const result = keys.reduce<TranslationValue>((obj, k) => {
      if (obj && typeof obj === "object") {
        return (obj as { [key: string]: TranslationValue })[k] || key;
      }
      return key;
    }, ui[lang]);

    if (typeof result === "string") {
      return result;
    }

    if (Array.isArray(result)) {
      return [...result];
    }

    return key;
  };
}
