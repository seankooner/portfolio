"use client";

import AboutMe from "@/components/SelfSummary/AboutMe";
import Skills from "@/components/SelfSummary/Skills";

const SelfSummarySection = () => {
  return (
    <section className="m-auto mb-40 grid max-w-7xl items-baseline gap-40 px-5 md:grid-cols-2 md:gap-20">
      <AboutMe />
      <Skills />
    </section>
  );
};

export default SelfSummarySection;
