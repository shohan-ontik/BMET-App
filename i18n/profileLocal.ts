import { I18n } from "i18n-js";

export type ProfileTranslation = {
  myProfile: string;
  security: string;
  newPin: string;
  confirmPin: string;
  updatePin: string;
  logout: string;
  student: string;
  enterNewPin: string;
  reEnterPin: string;
  errors: {
    pin: {
      min: string;
    };
  };
};
const profileUpdateBn: ProfileTranslation = {
  myProfile: "আমার প্রোফাইল",
  security: "নিরাপত্তা",
  newPin: "নতুন পিন",
  confirmPin: "পিন নিশ্চিত করুন",
  updatePin: "পিন আপডেট করুন",
  logout: "লগআউট",
  student: "শিক্ষার্থী",
  enterNewPin: "৪ সংখ্যার পিন লিখুন",
  reEnterPin: "পিন পুনরায় লিখুন",
  errors: {
    pin: {
      min: "পিন কমপক্ষে ৪ সংখ্যার হতে হবে",
    },
  },
};
const profileUpdateEn: ProfileTranslation = {
  myProfile: "My Profile",
  security: "Security",
  newPin: "New PIN",
  confirmPin: "Confirm PIN",
  updatePin: "Update PIN",
  logout: "Logout",
  student: "Student",
  enterNewPin: "Enter 4 digit PIN",
  reEnterPin: "Re-enter PIN",
  errors: {
    pin: {
      min: "Pin must be at least 4 numbers",
    },
  },
};
export const profileTr = new I18n({
  en: profileUpdateEn,
  bn: profileUpdateBn,
});

profileTr.enableFallback = true;
profileTr.defaultLocale = "bn";

export const tProfile = <K extends keyof ProfileTranslation>(
  key: K,
): ProfileTranslation[K] extends string ? string : any => {
  return profileTr.t(key as string);
};
