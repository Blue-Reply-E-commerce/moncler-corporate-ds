export const i18n = {
  defaultLocale: "en",
  locales: ["en", "it"],
};

export type Locale = (typeof i18n.locales)[number];
