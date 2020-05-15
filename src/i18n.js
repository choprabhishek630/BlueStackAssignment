import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Manage: "Manage",
        Campaign: "Campaign",
        Campaigns: "Campaigns",
        No: "No",
        Upcoming: "Upcoming",
        Live: "Live",
        Past: "Past",
        Close: "Close",
        Update: "Update",
        Apply: "Apply",
        Select: "Select",
        English: "English",
        Korean: "Korean",
        Date: "Date",
        View: "View",
        Actions: "Actions",
        ViewPricing: "View Pricing",
        CSV: "CSV",
        Report: "Report",
        ScheduleAgain: "Schedule Again",
        Jan: "Jan",
        Feb: "Feb",
        Mar: "Mar",
        Apr: "Apr",
        May: "May",
        Jun: "Jun",
        Jul: "Jul",
        Aug: "Aug",
        Sep: "Sep",
        Oct: "Oct",
        Nov: "Nov",
        Dec: "Dec",
        ManageCampaigns: "Manage Campaigns",
        PastCampaigns: "Past Campaigns",
        LiveCampaigns: "Live Campaigns",
        UpcomingCampaigns: "Upcoming Campaigns",
        NoCampaignsScheduled: "No Campaigns Scheduled",
        Day: "Day",
        Days: "Days",
        ago: "ago",
        ahead: "ahead",
        Today: "Today",
        Pricing: "Pricing",
        Week: "Week",
        Month: "Month",
        Months: "Months",
        Year: "Year",
        SelectDate: "Select Date"
      }
    },
    kor: {
      translations: {
      	Manage: "꾸리다",
        Campaign: "운동",
        Campaigns: "캠페인",
        No: "아니",
        Upcoming: "다가오는",
        Live: "라이브",
        Past: "과거",
        Close: "닫기",
        Update: "최신 정보",
        Apply: "대다",
        Select: "고르다",
        English: "영어",
        Korean: "한국어",
        Date: "데이트",
        View: "전망",
        Actions: "행위",
        ViewPricing: "가격보기",
        CSV: "CSV",
        Report: "보고서",
        ScheduleAgain: "다시 예약",
        Jan: "일월",
        Feb: "이월",
        Mar: "행진",
        Apr: "4 월",
        May: "할 수있다",
        Jun: "유월",
        Jul: "칠월",
        Aug: "팔월",
        Sep: "구월",
        Oct: "십월",
        Nov: "십일월",
        Dec: "12 월",
        ManageCampaigns: "캠페인 관리",
        PastCampaigns: "지난 캠페인",
        LiveCampaigns: "라이브 캠페인",
        UpcomingCampaigns: "다음 캠페인",
        NoCampaignsScheduled: "예약 된 캠페인이 없습니다",
        Day: "일",
        Days: "일",
        ago: "...전에",
        ahead: "앞으로",
        Today: "오늘",
        Pricing: "가격",
        Week: "주",
        Month: "달",
        Months: "개월",
        Year: "년",
        SelectDate: "날짜 선택"
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;