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
    "I'm a tech entrepreneur who's building and scaling SaaS startups for more than 5 years. I help early stage SaaS startups to *build the product*, *talk to customers* and *generate sales*.",
  socials: [
    {
      label: "Book a FREE Discovery Call",
      link: "https://calendly.com/hello-vh0/discovery-call-with-ba",
    },
    {
      label: "Reddit",
      link: "https://www.reddit.com/user/BahauddinA",
    },
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/bahauddinaziz/",
    },
    {
      label: "X",
      link: "https://twitter.com/bahauddinAz",
    },
  ],
};

export default presentation;
