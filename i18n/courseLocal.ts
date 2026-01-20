import { I18n } from "i18n-js";

export type CourseTranslation = {
  lessons: string;
  catalog: string;
  exploreLangs: string;
  course: string;
  back: string;
  progress: string;
  chapter: string;
  vocaPractice: string;
  startLesson1: string;
  startLesson2: string;
  startFlashcard: string;
};

const courseEn: CourseTranslation = {
  lessons: "Lessons",
  catalog: "Course Catalog",
  exploreLangs: "Explore available language tracks",
  course: " courses",
  back: "Back",
  progress: "Progress",
  chapter: "Chapter",
  vocaPractice: "Vocabulary Practice",
  startLesson1: "Master",
  startLesson2: " new words from this lesson.",
  startFlashcard: "Start Flashcards",
};

const courseBn: CourseTranslation = {
  lessons: "লেসন",
  catalog: "কোর্স তালিকা",
  exploreLangs: "ভাষা শেখার কোর্সগুলো ঘুরে দেখুন",
  course: "টি কোর্স",
  back: "আগের পৃষ্ঠা",
  progress: "অগ্রগতি",
  chapter: "অধ্যায়",
  vocaPractice: "শব্দভাণ্ডার অনুশীলন",
  startLesson1: "এই লেসন থেকে",
  startLesson2: "টি নতুন শব্দ আয়ত্ত করুন।",
  startFlashcard: "ফ্ল্যাশকার্ড শুরু করুন",
};

export const courseTr = new I18n({
  en: courseEn,
  bn: courseBn,
});

courseTr.enableFallback = true;
courseTr.defaultLocale = "bn";

export const tCourse = <K extends keyof CourseTranslation>(
  key: K,
): CourseTranslation[K] extends string ? string : any => {
  return courseTr.t(key as string);
};
