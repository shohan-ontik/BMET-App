import { I18n } from "i18n-js";

export type CourseTranslation = {
  lessons: string;
};

const courseEn: CourseTranslation = {
  lessons: "Lessons",
};

const courseBn: CourseTranslation = {
  lessons: "লেসন",
};

export const courseTr = new I18n({
  en: courseEn,
  bn: courseBn,
});

courseTr.enableFallback = true;
courseTr.defaultLocale = "bn";

export const tCourse = <K extends keyof CourseTranslation>(
  key: K
): CourseTranslation[K] extends string ? string : any => {
  return courseTr.t(key as string);
};
