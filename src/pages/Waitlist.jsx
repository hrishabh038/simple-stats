import { useEffect } from "react";
import { Glow, Typewriter } from "../components/components";
import {
  Banner,
  KeyFeatures,
  AboutUs,
  OurTimeline,
  OurTechStack,
} from "../containers/containers";
import Aos from "aos";
import "aos/dist/aos.css";
import { metadata } from "../metadata/metadata";

const Waitlist = () => {
  useEffect(() => {
    Aos.init({
      duration: 800, // animation duration in ms
      once: true, // only animate once per element
    });
  }, []);

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
        <OurTechStack words={metadata.techStack} sunText="Tech Stack" />
      </section>

      {/* Founders Section */}
      <section data-aos="fade-up" className="w-full">
        <AboutUs />
      </section>

      <section data-aos="zoom-in" className="w-full">
        <OurTimeline />
      </section>
    </main>
  );
};

export default Waitlist;
