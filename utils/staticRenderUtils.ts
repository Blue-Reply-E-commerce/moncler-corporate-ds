import { i18n } from "@/i18n-config";

const supportedLocales = i18n.locales;
type StaticParam = Record<string, any>;

export function getLocaleStaticParams(oldStaticParams: StaticParam[] = []): StaticParam[] {
  const staticParams: StaticParam[] = [];

  if (!supportedLocales.length) {
    return oldStaticParams;
  }

  for (const locale of supportedLocales) {
    const baseLocaleParam = { lang: locale.toLowerCase() };

    if (oldStaticParams.length > 0) {
      for (const oldParam of oldStaticParams) {
        staticParams.push({ ...oldParam, ...baseLocaleParam });
      }
    } else {
      staticParams.push(baseLocaleParam);
    }
  }

  return staticParams;
}
