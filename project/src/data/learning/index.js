import { webDevData } from "./webDevData";
import { softwareDevData } from "./softwareDevData";
import { dataAiData } from "./dataAiData";
import { cloudDevOpsData } from "./cloudDevOpsData";
import { cybersecurityData } from "./cybersecurityData";
import { databaseData } from "./databaseData";
import { testingData } from "./testingData";
import { mobileDevData } from "./mobileDevData";
import { networkingData } from "./networkingData";
import { uiUxData } from "./uiUxData";

export const allLearningPaths = {
  "web-development": webDevData,
  "software-development": softwareDevData,
  "data-ai": dataAiData,
  "cloud-devops": cloudDevOpsData,
  "cybersecurity": cybersecurityData,
  "database": databaseData,
  "software-testing": testingData,
  "mobile-development": mobileDevData,
  "it-networking": networkingData,
  "ui-ux-design": uiUxData,
};

export const allCategoriesList = [
  { id: "web-development", title: "Web Development", icon: "🌐", techCount: webDevData.technologies.length },
  { id: "software-development", title: "Software Development", icon: "💻", techCount: softwareDevData.technologies.length },
  { id: "data-ai", title: "Data Science & AI", icon: "🤖", techCount: dataAiData.technologies.length },
  { id: "cloud-devops", title: "Cloud & DevOps", icon: "☁️", techCount: cloudDevOpsData.technologies.length },
  { id: "cybersecurity", title: "Cyber Security", icon: "🛡️", techCount: cybersecurityData.technologies.length },
  { id: "database", title: "Database Administration", icon: "🗄️", techCount: databaseData.technologies.length },
  { id: "software-testing", title: "Software Testing / QA", icon: "🧪", techCount: testingData.technologies.length },
  { id: "mobile-development", title: "Mobile App Development", icon: "📱", techCount: mobileDevData.technologies.length },
  { id: "it-networking", title: "IT Support & Networking", icon: "📡", techCount: networkingData.technologies.length },
  { id: "ui-ux-design", title: "UI / UX Design", icon: "🎨", techCount: uiUxData.technologies.length }
];

export function getLearningPath(categoryId) {
  return allLearningPaths[categoryId] || allLearningPaths["web-development"];
}
