import { I18n } from "i18n-js";

export type LoginTranslation = {
  welcome: string;
  login: string;
  loginText: string;
  errors: {
    phone: {
      min: string;
    };
    password: {
      min: string;
    };
  };
};

const loginEn: LoginTranslation = {
  welcome: "Welcome Back",
  login: "Login to continue your learning",
  loginText: "Login",
  errors: {
    phone: {
      min: "Phone number must be at least 10 digits",
    },
    password: {
      min: "Password must be at least 6 characters",
    },
  },
};

const loginBn: LoginTranslation = {
  welcome: "আবার স্বাগতম",
  login: "আপনার শেখা চালিয়ে যেতে লগইন করুন",
  loginText: "লগইন করুন",
  errors: {
    phone: {
      min: "ফোন নম্বর কমপক্ষে ১০ সংখ্যার হতে হবে",
    },
    password: {
      min: "পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে",
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
