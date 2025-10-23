import {
  imgFive,
  imgFour,
  imgOne,
  imgSeven,
  imgThree,
  imgTwo,
  hrishabh,
} from "../assets/assets";

import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";

export const waitlistPageData = {
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
    heading: "The Fastest, Privacy-First Analytics for the Modern Web",
    subTagLine:
      "Simple Beautiful insights, cookie-less analytics that tell the truth without tracking your visitors. ",
    description: `Discover how your website performs without invading privacy. thegreatroadmap Analytics is a fast, ethical alternative to Google Analytics, 100% cookie-free, lightweight, and built for developers who care about compliance and speed.
`,
    rollingImages: [imgOne, imgTwo, imgThree, imgFour, imgFive, imgSeven],
  },

  typewriter: {
    wordsSetOne: [
      "Cookie-Less Tracking",
      "Anonymous Insights",
      "Real-Time Dashboard",
      "Custom Events",
      "User Journey / Session Flow",
      "UTM & Campaign Tracking",
      "Scroll Depth & Engagement",
      "Video Play/Pause Tracking",
      "404 & Error Tracking",
      "Device, Browser & Country Stats",
      "Automatic Bot & Spam Filtering",
      "Team Sharing & Roles",
      "Web Vitals (Opt-In)",
      "Ultra-Light Script (<1 KB)",
    ],
  },
  KeyFeatures: [
    {
      title: "Cookie-Less Tracking",
      description: "No cookies, no personal identifiers, fully anonymous.",
    },
    {
      title: "Anonymous Insights",
      description: "Understand visitors without invading their privacy.",
    },
    {
      title: "Real-Time Dashboard",
      description: "See live visitors, top pages, and referrers instantly.",
    },
    {
      title: "Custom Events",
      description: "Track clicks, form submits, button taps, and more.",
    },
    {
      title: "User Journey / Session Flow",
      description: "Aggregate visitor paths for actionable insights.",
    },
    {
      title: "UTM & Campaign Tracking",
      description:
        "Automatically group traffic by source, medium, and campaign.",
    },
    {
      title: "Scroll Depth & Engagement",
      description: "Know which sections capture attention.",
    },
    {
      title: "Video Play/Pause Tracking",
      description: "Works for YouTube & HTML5 videos.",
    },
    {
      title: "404 & Error Tracking",
      description: "Detect broken pages and error-heavy flows.",
    },
    {
      title: "Device, Browser & Country Stats",
      description: "Quick snapshot of visitor tech and locations.",
    },
    {
      title: "Automatic Bot & Spam Filtering",
      description: "Only real human visits are counted.",
    },
    {
      title: "Team Sharing & Roles",
      description: "Invite teammates, share dashboards, and control access.",
    },
    {
      title: "Web Vitals (Opt-In)",
      description: "Track LCP, CLS, FID optionally.",
    },
    {
      title: "Ultra-Light Script (<1 KB)",
      description: "Tiny, async, and fast.",
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
    description: `When we started our IndianWeddingBlogs.com, our goal was simple: share insights about Indian weddings and build a community of readers. Like many bloggers, we wanted to understand our audience and grow revenue through affiliate programs.
We started with Google Analytics, but it quickly became frustrating: dashboards were slow, overwhelming, and hard to navigate. Setting up funnels, tracking affiliate clicks, or understanding reader behavior felt unnecessarily complicated. Plus, GA tracked personal identifiers and relied on cookies, which didn’t align with our values of respecting privacy.
Next, we explored privacy-first tools like Simple Analytics, Fathom, Plausible, and Matomo. They were cleaner and more privacy-conscious, but still didn’t solve our problems:
`,
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
      "Discover how your website performs without invading privacy. thegreatroadmap Analytics is a fast, ethical alternative to Google Analytics — 100% cookie-free, lightweight, and built for developers who care about compliance and speed.",
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
        icon: FaGithub,
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
