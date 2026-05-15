export const SITE = {
  website: "https://dearjaehee.com/",
  author: "재희",
  profile: "",
  desc: "성경 읽다가 드는 생각, 그리고 조용한 편지함.",
  title: "Dear Jaehee",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "ko", // html lang code
  timezone: "Asia/Seoul",
} as const;
