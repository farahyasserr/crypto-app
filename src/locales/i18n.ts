import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";

const resources = {
  en: {
    translation: en,
  },
};

const i18n = i18next.use(initReactI18next).init({
  resources,
  compatibilityJSON: "v4",
  lng: "en", // default language is English
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18next;
