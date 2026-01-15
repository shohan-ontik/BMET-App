import { I18n } from "i18n-js";

export type OnboardingTranslation = {
  onBoard1Title: string;
  onBoard1Desc: string;
  onBoard2Title: string;
  onBoard2Desc: string;
  onBoard3Title: string;
  onBoard3Desc: string;
  next: string;
  getStarted: string;
};

const onboardingEn: OnboardingTranslation = {
  onBoard1Title: "Learn Anytime, Anywhere",
  onBoard1Desc:
    "Access your language lessons offline. No internet? No problem.",
  onBoard2Title: "Master New Skills",
  onBoard2Desc:
    "Learn essential vocaulary for your job construction, domestic work, and more.",
  onBoard3Title: "Connect With Confidence",
  onBoard3Desc:
    "Speak confidently in your new workplace. Bridging language gaps for a better future.",
  next: "Next",
  getStarted: "Get Started",
};

const onboardingBn: OnboardingTranslation = {
  onBoard1Title: "সব সময়, সব জায়গায় শেখার সুযোগ",
  onBoard1Desc: "ইন্টারনেট না থাকলেও লেসন আপনার হাতের নাগালে।",
  onBoard2Title: "নতুন দক্ষতা আয়ত্ত করুন",
  onBoard2Desc:
    "নির্মাণকাজ, গৃহস্থালি কাজসহ আপনার পেশার জন্য প্রয়োজনীয় শব্দভান্ডার শিখুন।",
  onBoard3Title: "আত্মবিশ্বাসের সাথে যোগাযোগ করুন",
  onBoard3Desc:
    "নতুন কর্মক্ষেত্রে আত্মবিশ্বাসের সাথে কথা বলুন। ভাষার বাধা দূর করে গড়ুন ভালো ভবিষ্যৎ।",
  next: "এগিয়ে যান",
  getStarted: "শুরু করা যাক",
};

export const onboardingTr = new I18n({
  en: onboardingEn,
  bn: onboardingBn,
});

onboardingTr.enableFallback = true;
onboardingTr.defaultLocale = "bn";

export const tOnboarding = <K extends keyof OnboardingTranslation>(
  key: K
): OnboardingTranslation[K] extends string ? string : any => {
  return onboardingTr.t(key as string);
};
