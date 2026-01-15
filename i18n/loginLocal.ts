import { I18n } from "i18n-js";

export type LoginTranslation = {
  welcome: string;
  login: string;
  loginText: string;
  givePin: string;
  phoneNumber: string;
  contact: string;
  errors: {
    phone: {
      min: string;
    };
    pin: {
      min: string;
    };
  };
};

const loginEn: LoginTranslation = {
  welcome: "Welcome Back",
  login: "Login to continue your learning",
  loginText: "Login",
  givePin: "Give your pin",
  phoneNumber: "Phone Number",
  contact: "Contract your instructor if you don't have pin.",
  errors: {
    phone: {
      min: "Phone number must be at least 10 digits",
    },
    pin: {
      min: "Pin must be at least 6 numbers",
    },
  },
};

const loginBn: LoginTranslation = {
  welcome: "স্বাগতম",
  login: "শেখা চালিয়ে যেতে লগইন করুন",
  loginText: "লগইন",
  givePin: "পিন কোড",
  phoneNumber: "মোবাইল নম্বর",
  contact: "পিন না থাকলে আপনার প্রশিক্ষকের সাথে যোগাযোগ করুন।",
  errors: {
    phone: {
      min: "ফোন নম্বর কমপক্ষে ১০ সংখ্যার হতে হবে",
    },
    pin: {
      min: "পিন কমপক্ষে ৬ সংখ্যার হতে হবে",
    },
  },
};

export const loginTr = new I18n({
  en: loginEn,
  bn: loginBn,
});

loginTr.enableFallback = true;
loginTr.defaultLocale = "bn";

export const tLogin = <K extends keyof LoginTranslation>(
  key: K
): LoginTranslation[K] extends string ? string : any => {
  return loginTr.t(key as string);
};
