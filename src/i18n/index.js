import spanish from "./es.json";
import english from "./en.json";

const LANGUAGES = {
  SPANISH: "es",
  ENGLISH: "en",
};

function getI18N({ currentLocale }) {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  return english;
}

export { getI18N };
