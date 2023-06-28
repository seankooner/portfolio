"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import HeroBackground from "@/components/Hero/HeroBackground";

const Hero = () => {
  const typingRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!typingRef.current) return;
    const delay = 3100; // adjust delay as needed
    const speed = 120; // adjust speed as needed
    const fullText = "with a passion for problem-solving.";

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (
          typingRef.current &&
          typingRef.current.textContent !== null &&
          i < fullText.length
        ) {
          typingRef.current.textContent += fullText[i];
          i++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => {
        clearInterval(interval);
      };
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section
      id="hero"
      className="flex h-screen items-center justify-center text-white"
    >
      <HeroBackground />
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ zIndex: 25, padding: "1rem" }}
      >
        <div className="flex flex-col items-start">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-4 text-3xl font-light"
          >
            Hello, I&apos;m
          </motion.h2>
          <h1 className="text-6xl font-bold leading-none">Sean Kooner</h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="mt-2 flex flex-wrap text-xl leading-none"
          >
            <motion.span className="mr-1">Self-taught</motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
              className="font-bold text-teal-400"
            >
              Full Stack Developer
            </motion.span>
          </motion.div>
          <span className="typing-effect">
            <span ref={typingRef} className="typing-content"></span>
            <span className="typing-caret"></span>
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
