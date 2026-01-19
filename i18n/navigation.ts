import { I18n } from "i18n-js";

export type NavigationTranslation = {
  home: string;
  courses: string;
  profile: string;
};

const navigationEn: NavigationTranslation = {
  home: "Home",
  courses: "Courses",
  profile: "Profile",
};

const navigationBn: NavigationTranslation = {
  home: "হোম",
  courses: "কোর্স",
  profile: "প্রোফাইল",
};

export const navigationTr = new I18n({
  en: navigationEn,
  bn: navigationBn,
});

navigationTr.enableFallback = true;
navigationTr.defaultLocale = "bn";

export const tNavigation = <K extends keyof NavigationTranslation>(
  key: K
): NavigationTranslation[K] extends string ? string : any => {
  return navigationTr.t(key as string);
};
