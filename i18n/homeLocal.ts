import { I18n } from "i18n-js";

export type HomeTranslation = {
  goodMorning: string;
  goodNoon: string;
  goodEvening: string;
  hour: string;
  learnedToday: string;
  lessonDone: string;
  myCourses: string;
};

const homeEn: HomeTranslation = {
  goodMorning: "Good Morning",
  goodNoon: "Good Afternoon",
  goodEvening: "Good Evening",
  hour: "h",
  learnedToday: "Learned Today",
  lessonDone: "Lessons Done",
  myCourses: "My Courses",
};

const homeBn: HomeTranslation = {
  goodMorning: "সুপ্রভাত",
  goodNoon: "শুভ অপরাহ্ণ",
  goodEvening: "শুভ সন্ধ্যা",
  hour: "ঘণ্টা",
  learnedToday: "আজ শিখেছেন",
  lessonDone: "সম্পন্ন লেসন",
  myCourses: "আমার কোর্সসমূহ",
};

export const homeTr = new I18n({
  en: homeEn,
  bn: homeBn,
});

homeTr.enableFallback = true;
homeTr.defaultLocale = "bn";

export const tHome = <K extends keyof HomeTranslation>(
  key: K,
): HomeTranslation[K] extends string ? string : any => {
  return homeTr.t(key as string);
};
