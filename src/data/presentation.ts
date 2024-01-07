type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hello@bahauddinaziz.com",
  title: "Hi, I’m Bahauddin 👋",
  // profile: "/profile.webp",
  description:
    "Hello, I'm a *tech entrepreneur* with over *5 years* of experience in *building and scaling B2B and B2C SaaS*. I am experienced in both writing code and selling products.",
  socials: [
    {
      label: "Reddit",
      link: "https://twitter.com/itsstormzz_",
    },
    {
      label: "LinkedIn",
      link: "https://bento.me/m-wolff",
    },
    {
      label: "X",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
