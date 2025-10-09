import {
  imgFive,
  imgFour,
  imgOne,
  imgSeven,
  imgThree,
  imgTwo,
  hrishabh,
  Logo,
} from "../assets/assets";

import { FaTwitter, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export const waitlistPageData = {
  logo: Logo,
  navbar: [
    {
      title: "Home",
      link: "#",
    },
    {
      title: "Features",
      link: "#",
    },
    {
      title: "Blogs",
      link: "#",
    },
  ],
  sectionHeadings: {
    keyFeatures: {
      title: "Key features",
    },
    ourTechStack: {
      title: "Our tech stack",
    },
    aboutUs: {
      title: "About us",
      subSection: {
        title: "Meet the team",
      },
    },
    ourTimeline: {
      title: "Our timeline",
    },
  },
  banner: {
    heading: "The Fastest, Privacy-First Analytics for Modern Websites",
    description: `Ditch complex, intrusive web analytics for Fathom - a better Google Analytics alternative. Experience ease of use, forever data retention, and complete, worry-free GDPR compliance - all while protecting your time and your visitors' digital privacy.`,
    rollingImages: [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSeven],
  },

  typewriter: {
    wordsSetOne: [
      "GDPR compliant",
      "Real-time dashboards",
      "No cookies",
      "Developer friendly",
      "Funnel & goal tracking",
      "Scroll depth",
      "UTM performance",
      "Live views",
      "Team sharing",
    ],
  },
  KeyFeatures: [
    {
      title: "Cookie-less Tracking",
      description:
        "Track users without storing personal data or needing consent banners.",
    },
    {
      title: "Real-Time Dashboard",
      description:
        "Instantly see your live traffic with accurate visitor counts.",
    },
    {
      title: "Funnel & Goal Tracking",
      description: "Create simple funnels and monitor conversions with ease.",
    },
    {
      title: "Scroll Depth Tracking",
      description:
        "Know how far users scroll on each page and improve engagement.",
    },
    {
      title: "UTM Campaign Analytics",
      description:
        "Measure how your marketing campaigns perform (email, ads, social).",
    },
    {
      title: "Lightweight Script (<1 KB)",
      description: "Loads instantly. Won’t slow down your site.",
    },
    {
      title: "Developer Friendly API",
      description:
        "Easy to integrate with any modern framework. Built for hackers.",
    },
    {
      title: "Email & Slack Alerts",
      description:
        "Get notified of traffic spikes or goal completions instantly.",
    },
    {
      title: "Multi-Site & Team Access",
      description:
        "Share dashboards with your team. Manage multiple sites easily.",
    },
    {
      title: "GDPR + CCPA Compliant by Default",
      description: "Zero headaches. Your users stay anonymous. Always.",
    },
  ],
  techStack: [
    "React",
    "JavaScript",
    "TailwindCSS",
    "HTML5",
    "Node.js",
    "Express",
    "MongoDB",
    "Responsive",
    "Components",
    "Props",
    "State",
    "Hooks",
    "Vite",
    "Webpack",
    "UI/UX",
    "GraphQL",
    "REST API",
    "TypeScript",
    "SASS",
    "Redux",
    "Next.js",
    "Jest",
    "CI/CD",
  ],
  timelineData: [
    // {
    //   title: "Office Inauguration Function",
    //   date: "2020-10-01",
    //   description: "Started journey with new office",
    //   images: [
    //     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    //     "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    //     "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
    //   ],
    // },
    {
      title: "MVP Build",
      date: "2020-09",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et assumenda, quos eius in modi beatae ",
    },
    {
      title: "Beta Waitlist Launch",
      date: "2020-09",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et assumenda",
    },
    {
      title: "Public Launch",
      date: "2020-09",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et assumenda, quos eius in modi beatae ",
    },
    {
      title: "Features Rollout",
      date: "2020-09",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et assumenda, quos eius in modi beatae ",
    },
  ],
  aboutUs: {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et assumenda, quos eius in modi beatae vitae dolorum quod commodi sapiente reprehenderit iusto provident obcaecati sunt nemo dolorem praesentium, libero, quasi alias. Tempora iure incidunt, neque eum sit nobis modi quo. Ducimus reprehenderit perferendis, sequi sapiente eligendi",
    team: [
      {
        img: hrishabh,
        name: "Hrishabh Jain",
        designation: "Product Engineer",
        company: "LTIMindtree",
        description:
          "Hrishabh specializes in product development and user experience. With a keen eye for detail, he blends design with code to create meaningful user interfaces.",
      },
      {
        name: "Aman Pandey",
        designation: "Software Engineer",
        company: "Company Name",
        description:
          "Aman is a passionate software engineer with deep interest in building scalable systems and writing clean code. He believes in continuous learning and teamwork to drive innovation.",
      },
    ],
  },
  footer: {
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore consectetur tempora quae recusandae impedit quibusdam illum atque saepe est, vero ipsam ut soluta nobis beatae voluptas, quisquam eos maiores quos accusamus! Iste ab modi incidunt, doloribus iusto obcaecati unde ipsa.",
    catchPhrase: "Made with ❤️ by indie hackers in India",
    links: [
      {
        title: "Home",
        link: "#",
      },
      {
        title: "Features",
        link: "#",
      },
      {
        title: "Blogs",
        link: "#",
      },
    ],
    socialMediaHandles: [
      {
        icon: FaTwitter,
      },
      {
        icon: FaLinkedin,
      },
      {
        icon: FaInstagram,
      },
      {
        icon: FaFacebook,
      },
    ],
  },
  forms: {
    joinTheWaitListForm: {
      heading: "Get Early Access",
      subHeading: "Join the waitlist to be the first to know when we launch.",
      name: {
        label: "Full Name",
        placeholder: "e.g., Jane Doe",
        type: "text",
      },
      email: {
        label: "Email Address",
        placeholder: "e.g., Jane Doe",
        type: "email",
      },
      phone: {
        label: "Phone Number (Optional)",
        placeholder: "+1 (555) 123-4567",
        type: "text",
      },
      submit: {
        variant: "solid",
        colorScheme: "primary",
        label: "Notify Me When You Launch",
      },
    },
  },
};
