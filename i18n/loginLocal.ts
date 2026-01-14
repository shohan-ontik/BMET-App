import { I18n } from "i18n-js";

type LoginTranslation = {
  welcome: string;
  login: string;
};

const loginEn: LoginTranslation = {
  welcome: "Welcome Back",
  login: "Login to continue your learning",
};

const loginBn: LoginTranslation = {
  welcome: "আবার স্বাগতম",
  login: "আপনার শেখা চালিয়ে যেতে লগইন করুন",
};

export const loginTr = new I18n({
  en: loginEn,
  bn: loginBn,
});

export const tLogin = <K extends keyof LoginTranslation>(key: K) => {
  return loginTr.t(key);
};
