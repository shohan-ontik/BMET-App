export const languagesList = [
  {
    id: 1,
    title: "ইংরেজি",
    totalCourses: 2,
    courses: [
      {
        id: "1",
        category: "ইংরেজি",
        title: "সাধারণ ইংরেজি",
        description: "দৈনন্দিন যোগাযোগের জন্য বেসিক ইংরেজি।",
        completedLessons: 7,
        totalLessons: 20,
        progressPercentage: 35,
        isLocked: false,
      },
      {
        id: "2",
        category: "ইংরেজি",
        title: "নির্মাণকাজের জন্য ইংরেজি",
        description: "সাইট নিরাপত্তা, যন্ত্রপাতি ও নির্দেশনা।",
        completedLessons: 0,
        totalLessons: 15,
        progressPercentage: 0,
        isLocked: true,
      },
    ],
  },
  {
    id: 2,
    title: "আরবি",
    totalCourses: 2,
    courses: [
      {
        id: "1",
        category: "আরবি",
        title: "সাধারণ আরবি",
        description: "দৈনন্দিন যোগাযোগের জন্য বেসিক আরবি।",
        completedLessons: 7,
        totalLessons: 20,
        progressPercentage: 35,
        isLocked: true,
      },
      {
        id: "2",
        category: "আরবি",
        title: "নির্মাণকাজের জন্য আরবি",
        description: "সাইট নিরাপত্তা, যন্ত্রপাতি ও নির্দেশনা।",
        completedLessons: 0,
        totalLessons: 15,
        progressPercentage: 0,
        isLocked: true,
      },
    ],
  },
];

export const chapterListData = [
  {
    id: 1,
    chapter: 1,
    title: "শুভেচ্ছা ও পরিচিতি",
    lessonList: [
      {
        id: 1,
        title: "হ্যালো বলা",
        duration: "১৫:০০",
        type: "lesson",
        isLocked: false,
      },
      {
        id: 2,
        title: "নিজেকে পরিচয় করানো",
        duration: "২০:০০",
        type: "lesson",
        isLocked: true,
      },
      {
        id: 3,
        type: "quiz",
        isLocked: true,
      },
    ],
  },
  {
    id: 2,
    chapter: 2,
    title: "বিমানবন্দরে",
    lessonList: [
      {
        id: 1,
        title: "চেক-ইন কাউন্টার",
        duration: "১৫:০০",
        type: "lesson",
        isLocked: true,
      },
      {
        id: 2,
        title: "নিরাপত্তা যাচাই",
        duration: "২০:০০",
        type: "lesson",
        isLocked: true,
      },
      {
        id: 3,
        type: "quiz",
        isLocked: true,
      },
    ],
  },
];
