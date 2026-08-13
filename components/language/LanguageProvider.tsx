"use client";

import {
  createContext,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  translations,
  type Language,
} from "./translations";

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (typeof translations)[Language];
};

const LanguageContext =
  createContext<LanguageContextType | null>(null);

const STORAGE_KEY = "portfolio-language";

const LANGUAGE_CHANGE_EVENT =
  "portfolio-language-change";

function isLanguage(
  value: string | null,
): value is Language {
  return value === "pl" || value === "en";
}

function getLanguageSnapshot(): Language {
  const savedLanguage =
    window.localStorage.getItem(STORAGE_KEY);

  return isLanguage(savedLanguage)
    ? savedLanguage
    : "pl";
}

function getServerSnapshot(): Language {
  return "pl";
}

function subscribeToLanguage(
  callback: () => void,
) {
  const handleStorage = (
    event: StorageEvent,
  ) => {
    if (event.key === STORAGE_KEY) {
      callback();
    }
  };

  const handleLocalChange = () => {
    callback();
  };

  window.addEventListener(
    "storage",
    handleStorage,
  );

  window.addEventListener(
    LANGUAGE_CHANGE_EVENT,
    handleLocalChange,
  );

  return () => {
    window.removeEventListener(
      "storage",
      handleStorage,
    );

    window.removeEventListener(
      LANGUAGE_CHANGE_EVENT,
      handleLocalChange,
    );
  };
}

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    getServerSnapshot,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  function setLanguage(
    newLanguage: Language,
  ) {
    window.localStorage.setItem(
      STORAGE_KEY,
      newLanguage,
    );

    window.dispatchEvent(
      new Event(LANGUAGE_CHANGE_EVENT),
    );
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider",
    );
  }

  return context;
}