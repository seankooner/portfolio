"use client";

import { useSpring, animated, to } from "@react-spring/web";
import { useRef, useState } from "react";
import { useGesture } from "react-use-gesture";
import { motion } from "framer-motion";
import Image from "next/image";

const skillCategories = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "TypeScript", image: "/icons/typescript.png" },
      { name: "JavaScript", image: "/icons/javascript.png" },
      { name: "HTML", image: "/icons/html.png" },
      { name: "CSS", image: null },
      { name: "PHP", image: null },
      { name: "Python", image: null },
      { name: "C#", image: null },
    ],
  },
  {
    category: "FULL-STACK",
    skills: [
      { name: "Next.js", image: "/icons/nextjs.png" },
      { name: "Tailwind", image: "/icons/tailwind.png" },
      { name: "Clerk", image: "/icons/clerk.png" },
      { name: "Redux", image: null },
      { name: "React", image: null },
      { name: "Node", image: null },
      { name: "Express", image: null },
      { name: "Vue", image: null },
      { name: "Angular", image: null },
    ],
  },
  {
    category: "DB & ORM",
    skills: [
      { name: "Prisma", image: "/icons/prisma.png" },
      { name: "PlanetScale", image: "/icons/planetscale.png" },
      { name: "MongoDB", image: "/icons/mongodb.png" },
      { name: "Upstash", image: null },
      { name: "PostgreSQL", image: null },
      { name: "MySQL", image: null },
      { name: "Redis", image: null },
    ],
  },
  {
    category: "APIs",
    skills: [
      { name: "REST", image: "/icons/rest.png" },
      { name: "tRPC", image: "/icons/trpc.png" },
      { name: "GraphQL", image: "/icons/graphql.png" },
      { name: "Apollo", image: null },
      { name: "Serverless", image: null },
      { name: "Lambda", image: null },
      { name: "OpenAPI", image: null },
    ],
  },
  {
    category: "DEVOPS",
    skills: [
      { name: "Vercel", image: "/icons/vercel.png" },
      { name: "AWS", image: "/icons/aws.png" },
      { name: "GCE", image: "/icons/gce.png" },
      { name: "Git", image: null },
      { name: "Cypress", image: null },
      { name: "Docker", image: null },
      { name: "Kubernetes", image: null },
    ],
    additionalSkills: [],
  },
  {
    category: "MISC",
    skills: [
      { name: "Figma", image: "/icons/figma.png" },
      { name: "AI / LLM", image: "/icons/ai.png" },
      { name: "Adobe", image: "/icons/adobe.png" },
      { name: "ClickUp", image: null },
      { name: "Notion", image: null },
      { name: "Slack", image: null },
      { name: "Discord", image: null },
      { name: "Jira", image: null },
    ],
  },
];

interface SkillData {
  name: string;
  image: string | null;
}

interface SkillCategoryProps {
  category: string;
  skills: SkillData[];
  isOpen: boolean;
  onToggle: () => void;
}

interface SkillProps {
  skill: SkillData;
  index: number;
}

const Skill = ({ skill, index }: SkillProps) => {
  return (
    <motion.div
      className="flex w-1/3 items-center gap-1"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      {skill.image ? (
        <Image
          className="w-4 xl:w-5"
          width={14}
          height={14}
          src={skill.image}
          alt={skill.name}
        />
      ) : (
        <div className="w-4 xl:w-5" />
      )}
      <div className="text-sm text-white sm:text-lg md:text-base lg:text-lg xl:text-lg">
        {skill.name}
      </div>
    </motion.div>
  );
};

const SkillCategory = ({
  category,
  skills,
  isOpen,
  onToggle,
}: SkillCategoryProps) => {
  const domTarget = useRef(null);

  const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
    () => ({
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      scale: 1,
      zoom: 0,
      x: 0,
      y: 0,
      config: { mass: 5, tension: 350, friction: 40 },
    })
  );

  useGesture(
    {
      onMove: () => {
        api({
          scale: 1.05,
        });
      },
      onHover: ({ hovering }) => {
        if (!hovering) {
          api({ rotateX: 0, rotateY: 0, scale: 1 });
        }
      },
    },
    { domTarget, eventOptions: { passive: false } }
  );

  const mainSkills = skills.slice(0, 3);
  const additionalSkills = skills.slice(3);

  return (
    <animated.div
      className="relative mb-6 w-full last:mb-0"
      ref={domTarget}
      style={{
        transform: "perspective(600px)",
        x,
        y,
        scale: to([scale, zoom], (s, z) => s + z),
        rotateX,
        rotateY,
        rotateZ,
      }}
    >
      <h3 className="absolute -mt-4 w-full text-xs font-light text-gray-300 opacity-100 ">
        {category}
      </h3>
      <div className="flex items-center justify-between" onClick={onToggle}>
        <div className="z-10 flex w-full cursor-pointer flex-wrap items-center gap-2 rounded bg-black bg-opacity-25 p-1">
          <div className="flex w-full flex-wrap">
            {mainSkills.map((skill, skillIndex) => (
              <Skill key={skill.name} skill={skill} index={skillIndex} />
            ))}
            {isOpen &&
              additionalSkills.map((skill, skillIndex) => (
                <Skill
                  key={skill.name}
                  skill={skill}
                  index={skillIndex + mainSkills.length}
                />
              ))}
          </div>
          {additionalSkills.length > 0 && (
            <div className="absolute right-0 top-0 mr-2 mt-2 cursor-pointer text-gray-200">
              {isOpen ? "-" : "+"}
            </div>
          )}
        </div>
      </div>
    </animated.div>
  );
};

const Skills = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    if (openCategory === category) {
      setOpenCategory(null);
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <section>
      {skillCategories.map(({ category, skills }) => (
        <SkillCategory
          key={category}
          category={category}
          skills={skills}
          isOpen={openCategory === category}
          onToggle={() => toggleCategory(category)}
        />
      ))}
    </section>
  );
};

export default Skills;
