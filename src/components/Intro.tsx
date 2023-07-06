"use client";

import { motion } from "framer-motion";
import useTypewriterEffect from "@/hooks/useTypewriterEffect";

const IntroSection = () => {
  const fullText = "creative 💡 innovative ⏩ problem-solver 💯";
  const typingRef = useTypewriterEffect(fullText);

  return (
    <section
      id="introSection"
      className="flex h-screen items-center justify-center p-4 text-white"
    >
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <div className="">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base font-light text-gray-400 sm:text-lg md:text-xl xl:text-2xl"
          >
            Hello, my name is
          </motion.h2>
          <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Sean Kooner
          </h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-wrap"
          >
            <motion.span className="mr-2 text-sm sm:text-lg md:text-2xl xl:text-3xl">
              Self-taught
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="text-sm font-bold text-teal-400 sm:text-lg md:text-2xl xl:text-3xl"
            >
              Full Stack Developer
            </motion.span>
          </motion.div>
          <span className="typing-effect text-2xs sm:text-sm md:text-lg xl:mt-2 xl:text-xl">
            <span ref={typingRef} className="typing-content "></span>
            <span className="typing-caret"></span>
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default IntroSection;
