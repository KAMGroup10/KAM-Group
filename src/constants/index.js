import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  meta,
  carrent,
  jobit,
  tripguide,
  threejs,
  teaser,
  LU,
  GoogleAds,
  linkedin,
  tiktok,
  yt,
  snap,
  stel,
  mcd,
  SA,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ads management",
    icon: teaser,
  },
  {
    title: "Account management",
    icon: mobile,
  },
  {
    title: "Content Creation",
    icon: creator,
  },
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Backend Development",
    icon: backend,
  },

];

const technologies = [

  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Google Ads",
    icon: GoogleAds, 

  },
  {
    name: "meta",
    icon: meta,
  },
  {
    name: "linkedin",
    icon: linkedin,
  },
  {
    name: "snap",
    icon: snap,
  },
  {
    name: "yt",
    icon: yt,
  },
  {
    name: "tiktok",
    icon: tiktok,
  },

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Lebanese University",
    icon: LU,
    iconBg: "#383E56",
    date: "March 2020 - September 2022",
    points: [
      "Developing and maintaining the Lebanese University student enrollment software(Faculty of Science.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Programmatic Ads",
    company_name: "McDonald's",
    icon: mcd,
    iconBg: "#E6DEDD",
    date: "Nov 2021 - Oct 2023",
    points: [
      "Our team previously led multi-million dollars accounts, including McDonald's across GCC and Levant markets.",
      "Covered end-to-end planning, setup, activation and optimization of programmatic campaigns across diverse ad formats, including display, video (OPX, PG - PD deals and YouTube), native, rich media, audio and gamification ads on Desktops,Mobiles and CTVs using different dsps (Dv360, Amazon, Teads and Trade Desk).",
    ],
  },
  {
    title: "Programmatic Ads",
    company_name: "Stellantis",
    icon: stel,
    iconBg: "#383E56",
    date: "Febuary 2022 - Oct 2023",
    points: [
      "Other than McDonald's, our team also have an experience with the automotive world.",
      "Handeling Stellantis and it's well known brands including Alfa Romeo, Dodge, Fiat, Jeep, Maserati, Peugeot, Ram, and FIAT",
      "From planning, to campaign launch and optimization out team handled fully the account.",
    ],
  },
  {
    title: "Social ads",
    company_name: "Levant accounts",
    icon: SA,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Feb 2023",
    points: [
      "Supported on Levant clients Silkor, Visa, Umniah and many more.",
      "Launched and supported on the optimization of these accounts for both programmatic and social ads.",
      "Targeted audience in Jordan, Lebanon and Iraq using multiple platforms(Business ads manager, Snapchat and Tiktok ads).",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but KAM you guys proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like you do.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our campaigns, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
