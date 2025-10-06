import { useEffect } from "react";
import { Glow, Typewriter } from "../components/components";
import {
  Banner,
  KeyFeatures,
  AboutUs,
  SolarSyatem,
  Timeline,
} from "../containers/containers";
import Aos from "aos";
import "aos/dist/aos.css";

const Waitlist = () => {
  useEffect(() => {
    Aos.init({
      duration: 800, // animation duration in ms
      once: true, // only animate once per element
    });
  }, []);

  const techWords = [
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
  ];

  const timelineData = [
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
  ];
  return (
    <main className="w-full flex flex-col gap-24 overflow-hidden">
      {/* Hero Banner */}
      <section data-aos="fade-down" className="w-full pt-[45px] md:pt-[95px]">
        <Banner />
      </section>

      {/* Key Features */}
      <section data-aos="fade-up" className="w-full">
        <KeyFeatures />
      </section>

      <section data-aos="zoom-in" className="w-full">
        <SolarSyatem words={techWords} sunText="Tech Stack" />
      </section>

      {/* Founders Section */}
      <section data-aos="fade-up" className="w-full">
        <AboutUs />
      </section>

      <section data-aos="zoom-in" className="w-full">
        <Timeline events={timelineData} />
      </section>
    </main>
  );
};

export default Waitlist;
