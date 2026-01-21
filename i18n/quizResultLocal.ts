import { I18n } from "i18n-js";

export type QuizResultTranslation = {
    quizResult: {
        title: string;
        score: string;
        total: string;
        percentage: string;
        pass: string;
        fail: string;
        backToCourse: string;
        practiceAgain: string;
    };
};

const quizResultBn: QuizResultTranslation = {
    quizResult: {
        title: "কুইজ ফলাফল",
        score: "আপনার স্কোর",
        total: "মোট প্রশ্ন",
        percentage: "শতাংশ",
        pass: "অভিনন্দন! আপনি পাস করেছেন।",
        fail: "দুঃখিত, আপনি ফেল করেছেন। আবার চেষ্টা করুন।",
        backToCourse: "কোর্সে ফিরে যান",
        practiceAgain: "আবার অনুশীলন করুন",
    },
};

const quizResultEn: QuizResultTranslation = {
    quizResult: {
        title: "Quiz Result",
        score: "Your Score",
        total: "Total Questions",
        percentage: "Percentage",
        pass: "Congratulations! You passed.",
        fail: "Sorry, you failed. Please try again.",
        backToCourse: "Back to Course",
        practiceAgain: "Practice Again",
    },
};

export const quizResultTr = new I18n({
    en: quizResultEn,
    bn: quizResultBn,
});

quizResultTr.enableFallback = true;
quizResultTr.defaultLocale = "bn";

export const tQuizResult = <K extends keyof QuizResultTranslation>(
    key: K,
): QuizResultTranslation[K] => {
    return quizResultTr.t(key as string) as QuizResultTranslation[K];
};