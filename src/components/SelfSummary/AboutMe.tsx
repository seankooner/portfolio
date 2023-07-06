import React from "react";

const TEXT = {
  heading: "Nice to meet you!",
  subheading: "Here's a little about myself...",
  paragraph: `I love coding. Self-taught and always wanting to learn more, I'm
    constantly honing my skills by picking up new challenges. My journey has
    taught me to be confident in my ability to find the answer, no matter
    the problem at hand. I'm all about diving in, learning quickly, and
    perfecting my craft. Now, I'm looking for the next big problem to
    solve with a team that values hard work and results, in a space where
    code contributes to something I'm passionate about.`,
};

interface TextProps {
  heading: string;
  subheading: string;
  paragraph: string;
}

interface AboutMeProps {
  text?: TextProps;
}

const AboutMe = ({ text = TEXT }: AboutMeProps) => {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white transition-all sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl">
        {text.heading}
      </h2>
      <h3 className=" mb-4 text-lg font-thin leading-none text-white transition-all sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
        {text.subheading}
      </h3>
      <p className="text-md rounded-lg bg-overlay-gradient p-3  text-white transition-all">
        {text.paragraph}
      </p>
    </section>
  );
};

export default AboutMe;
