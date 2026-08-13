import { en } from "./translations/en";
import { pl } from "./translations/pl";

export const translations = {
  pl,
  en,
} as const;

export type Language =
  keyof typeof translations;