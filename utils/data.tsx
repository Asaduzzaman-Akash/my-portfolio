import React from "react";
import { FaDog } from "react-icons/fa";
import { MdOutlineNoPhotography } from "react-icons/md";

import { MdMarkEmailUnread } from "react-icons/md";

import { SiMicrodotblog } from "react-icons/si";

import { TiWeatherCloudy } from "react-icons/ti";

import { MdOutlineEventAvailable } from "react-icons/md";

import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaDev } from "react-icons/fa";

import { FcTodoList } from "react-icons/fc";
import { ImBooks } from "react-icons/im";
import { RiQuillPenLine } from "react-icons/ri";

export const FRONTEND_APPS = [
  {
    name: "NextEvents",
    icon: <MdOutlineEventAvailable size={30} className="text-stone-100 " />,
    description:
      "An event app designed to showcase the benefits of file-based routing of Next.js.",
    link: "https://nextevent-rust.vercel.app/",
  },
  {
    name: "LensLyfe Photography",
    icon: <MdOutlineNoPhotography size={30} className="text-stone-100 " />,
    description:
      "Next.js photography app: elegant, responsive and customizable.",
    link: "https://lenslyfephotography.netlify.app/",
  },

  {
    name: "TinDog",
    icon: <FaDog size={30} className="text-stone-100 " />,
    description: "Bootstrap-powered dog magazine app for canine enthusiasts.",
    link: "https://dogmagazine.netlify.app/",
  },
  {
    name: "Weather App",
    icon: <TiWeatherCloudy size={30} className="text-stone-100 " />,
    description:
      "React-based weather app: global forecasts at your fingertips.",
    link: "https://github.com/Asaduzzaman-Akash/WeatherApp-React-Tailwind",
  },
];

export const BACKEND_APPS = [
  {
    name: "ToDoList",
    icon: <FcTodoList size={30} className="text-stone-100 " />,
    description: "Todo List app which got backend support with MongoDB.",
    link: "https://github.com/Asaduzzaman-Akash/Todo-List-v2",
  },
  {
    name: "Blog",
    icon: <SiMicrodotblog size={30} className="text-stone-100 " />,
    description:
      "A Blog web app where you can add blog post and also search for specific post.",
    link: "https://github.com/Asaduzzaman-Akash/Blog-v2-mongoose",
  },
  {
    name: "Newsletter",
    icon: <MdMarkEmailUnread size={30} className="text-stone-100 " />,
    description:
      "A newsletter signup web app where I can sign people to my newsletter by email.",
    link: "https://github.com/Asaduzzaman-Akash/Newsletter-Signup-with-MailchimpAPI",
  },
];

export const RESOURCES = [
  {
    section: "Cloud Platforms",
    data: [
      {
        name: "PlanetScale",
        description: "Serverless MySQL platform.",
        link: "https://planetscale.com/",
      },
      {
        name: "Supabase",
        description: "An open source Firebase alternative.",
        link: "https://supabase.com/",
      },
      {
        name: "Netlify",
        description: "A serverless development platform.",
        link: " https://www.netlify.com/",
      },

      {
        name: "Vercel",
        description: "Easy deployment platform.",
        link: "https://vercel.com/",
      },
      {
        name: "Koyeb",
        description: "Global deployment applications platform.",
        link: "https://www.koyeb.com/",
      },

      {
        name: "Rapid API",
        description: "API Hub.",
        link: "https://rapidapi.com/hub",
      },
    ],
  },
  {
    section: "Design Tools",
    data: [
      {
        name: "freepik",
        description: "Image bank website.",
        link: "https://www.freepik.com/free-photos-vectors/flat-illustration",
      },
      {
        name: "removebg",
        description: "Free Background Remover.",
        link: "https://www.remove.bg/",
      },
      {
        name: "favicon.io",
        description: "Free favicon generator.",
        link: "https://favicon.io/",
      },
      {
        name: "Figma",
        description: "Collaborative web application for interface design.",
        link: "https://www.figma.com/",
      },
      {
        name: "Canva",
        description: "A graphic design platform.",
        link: "https://www.canva.com/",
      },
      {
        name: "CSS Gradient",
        description: "Create a gradient background.",
        link: "https://cssgradient.io/",
      },
      {
        name: "HTML Color Picker",
        description: "Color hue maker.",
        link: "https://www.w3schools.com/colors/colors_picker.asp",
      },
      {
        name: "Clippy",
        description: "CSS clip-path maker.",
        link: "https://bennettfeely.com/clippy/",
      },
      {
        name: "CSS matic",
        description: "The ultimate CSS tools for web designers.",
        link: "https://www.cssmatic.com/",
      },
    ],
  },
  {
    section: "AI Tools",
    data: [
      {
        name: "Midjourney",
        description: "AI Text to Image Generator.",
        link: "https://midjourney.com/home/?callbackUrl=%2Fapp%2F",
      },
      {
        name: "ChatGPT",
        description: "OpenAI chatbot that uses GPT-4.",
        link: " https://chat.openai.com/auth/loginF",
      },
    ],
  },
  {
    section: "Miscellaneous",
    data: [
      {
        name: "goodbrief",
        description: "A random generator for design briefs.",
        link: "https://goodbrief.io/",
      },
      {
        name: "umami",
        description: "Alternative to Google Analytics.",
        link: "https://umami.is/",
      },
      {
        name: "Product Hunt",
        description: "Curation of the best new products.",
        link: "https://www.producthunt.com/",
      },
      {
        name: "Gumroad",
        description: "E-commerce platform.",
        link: "https://gumroad.com/",
      },
      {
        name: "Futurepedia.io",
        description: "AI tool directory.",
        link: "https://www.futurepedia.io/",
      },
      {
        name: "SaaSHub",
        description: "Software Alternatives And Reviews.",
        link: "https://www.saashub.com/",
      },
      {
        name: "Libraries.io",
        description: "Open source packages across package managers.",
        link: "https://libraries.io/",
      },
      {
        name: "Lorem Ipsum",
        description: "Placeholder text generator.",
        link: " https://loremipsum.io/",
      },
    ],
  },
  {
    section: "Productivity",
    data: [
      {
        name: "Excalidraw",
        description: "Virtual collaborative whiteboard.",
        link: "https://excalidraw.com/",
      },
      {
        name: "Craft",
        description: "Alternative to Notion.",
        link: "https://www.craft.do/",
      },
    ],
  },
  {
    section: "Front-End",
    data: [
      {
        name: "React Icons",
        description: "Popular icon packs.",
        link: "https://react-icons.github.io/react-icons",
      },

      {
        name: "useAnimations",
        description: "Animated icons in Lottie Framework.",
        link: "https://useanimations.com/#explore",
      },
      {
        name: "heroicons",
        description: "Icons from Tailwind CSS.",
        link: "https://heroicons.com/",
      },

      {
        name: "Flowbite",
        description: "Components using Tailwind CSS.",
        link: "https://flowbite.com/",
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework.",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    section: "UI Libraries",
    data: [
      {
        name: "Material UI",
        description:
          "A comprehensive library of components based on Google's Material Design system.",
        link: "https://mui.com/",
      },
      {
        name: "Elastic UI",
        description: "A design library in use at Elastic.",
        link: "https://eui.elastic.co/#/",
      },
      {
        name: "Ant Design",
        description: "UI design language and React UI library.",
        link: "https://ant.design/",
      },
      {
        name: "Semantic UI",
        description: "A front-end development framework similar to bootstrap.",
        link: "https://semantic-ui.com/introduction/getting-started.html",
      },
      {
        name: "Chakra UI",
        description: "A simple, modular and accessible component library",
        link: "https://chakra-ui.com/",
      },
      {
        name: "Headless UI",
        description: "UI components accessible with Tailwind CSS",
        link: "https://headlessui.com/",
      },
      {
        name: "shadcn/ui",
        description: "Designed componentsbuilt with Radix UI and Tailwind CSS.",
        link: "https://ui.shadcn.com/",
      },
      {
        name: "Sailboat UI",
        description: "A modern UI component library for Tailwind CSS.",
        link: " https://sailboatui.com/docs/getting-started/quick-start/",
      },
    ],
  },
  {
    section: "Free Online Courses",
    data: [
      {
        name: "Scrimba",
        description: "Interactive courses and tutorials.",
        link: "https://scrimba.com/allcourses",
      },
      {
        name: "LearnWeb3",
        description:
          "The best place to turn you into a web3 developer for completely free.",
        link: "https://learnweb3.io/",
      },
      {
        name: "AWS Skill Builder",
        description: "Courses to help you learn AWS.",
        link: "https://explore.skillbuilder.aws/lms/",
      },
      {
        name: "egghead",
        description: "High-quality curated video courses.",
        link: "https://egghead.io/",
      },
      {
        name: "A Cloud Guru",
        description: "Build expertise with real hands-on labs.",
        link: "https://learn.acloud.guru/dashboard",
      },
      {
        name: "freeCodeCamp",
        description: "An interactive learning web platform.",
        link: " https://www.freecodecamp.org/",
      },

      {
        name: "datacamp",
        description: "Learn data skills you need online.",
        link: "https://www.datacamp.com/",
      },
    ],
  },
];

export const SOCIALS = [
  {
    link: "https://github.com/Asaduzzaman-Akash",
    icon: (
      <AiOutlineGithub
        className="cursor-pointer text-white transition-transform hover:-translate-y-1 "
        size={25}
      />
    ),
  },
  {
    link: "https://dev.to/asaduzzamanakash",
    icon: (
      <FaDev
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },
  {
    link: "https://www.youtube.com/channel/UCXOh8f4q2j470opP-qImt7g",
    icon: (
      <AiOutlineYoutube
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },
  {
    link: "https://twitter.com/digitalCra55",
    icon: (
      <AiOutlineTwitter
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },

  {
    link: "https://www.linkedin.com/in/akash053/",
    icon: (
      <AiOutlineLinkedin
        className="cursor-pointer text-white transition-transform hover:-translate-y-1"
        size={25}
      />
    ),
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Developer",
    organization: "Proterra Ag",
    location: "Commerce, CA",
    period: "Jan 2022 – May 2022",
    time: "5 mos",
    link: "https://www.proterra.ag/",
  },
  {
    role: "Associate Embedded Systems Engineer",
    organization: "Proterra Ag",
    location: "Commerce, CA",
    period: "Feb 2021 – Dec 2021",
    time: "11 mos",
    link: "https://www.proterra.ag/",
  },
  {
    role: "Software Engineer",
    organization: "Teledyne Imaging Sensors",
    location: "Camarillo, CA",
    period: "Jan 2020 – Dec 2020",
    time: "1 yr",
    link: "https://www.teledyneimaging.com/en/home/",
  },
];

export const INTERESTS = [
  {
    title: "Books",
    slug: "books",
    icon: <ImBooks size={30} />,
  },
  {
    title: "Writing",
    slug: "writing",
    icon: <RiQuillPenLine size={30} />,
  },
];
