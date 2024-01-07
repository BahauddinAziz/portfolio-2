export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Sketchnote",
    techs: ["Tech", "Project management", "B2B"],
    link: "https://sketchnote.co",
  },
  {
    title: "Chefkart",
    techs: ["Growth", "Home services", "B2C"],
    link: "https://chefkart.com",
  },
  {
    title: "Salesrobot",
    techs: ["Tech", "LinkedIn automation", "B2B"],
    link: "https://salesrobot.co",
  },
  {
    title: "Promotee",
    techs: ["Tech & Growth", "Reddit outreach", "B2B"],
    link: "https://www.promotee.io",
  },
  {
    title: "Fastreach",
    techs: ["Tech & Growth", "AI cold emails", "B2B"],
    link: "https://www.fastreach.io",
  }
];

export default projects;
