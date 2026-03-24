import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import ptBR from "./locales/pt/pt-BR.json";
import en from "./locales/en/en.json";

const ptProjects = import.meta.glob("./locales/pt/projects/*.json", {
  eager: true,
});

const enProjects = import.meta.glob("./locales/en/projects/*.json", {
  eager: true,
});

const loadProjects = (modules: Record<string, any>) => {
  const result: Record<string, any> = {};

  Object.entries(modules).forEach(([path, module]) => {
    const fileName = path.split("/").pop()?.replace(".json", "");
    if (fileName) {
      result[fileName] = module.default;
    }
  });

  return result;
};

const ptProjectsLoaded = loadProjects(ptProjects);
const enProjectsLoaded = loadProjects(enProjects);

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": {
        translation: {
          ...ptBR,
          ...ptProjectsLoaded,
        },
      },
      en: {
        translation: {
          ...en,
          ...enProjectsLoaded,
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
      lookupLocalStorage: "i18nextLng",
    },
  });

export default i18n;