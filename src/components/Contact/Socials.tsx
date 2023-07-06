"use client";

import { motion } from "framer-motion";
import { DocumentTextIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { MeteorShower } from "../Background";

interface Social {
  href: string;
  icon: JSX.Element;
  label: string;
}
const DocumentTextIconComponent = () => (
  <div className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700 p-2">
    <DocumentTextIcon className="w-10 text-white" />
  </div>
);
const EnvelopeIconComponent = () => (
  <div className="rounded-full bg-gradient-to-r from-cyan-500 to-cyan-700 p-2">
    <EnvelopeIcon className="w-10 text-white" />
  </div>
);

const socials: Social[] = [
  {
    href: "https://github.com/seankooner",
    icon: (
      <div className="rounded-full bg-white p-2 ">
        <img
          className="w-10"
          src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
        />
      </div>
    ),
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/seankooner",
    icon: (
      <div className="rounded-full bg-white p-2 ">
        <img
          className="w-10"
          src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
        />
      </div>
    ),
    label: "LinkedIn",
  },
  {
    href: "/seanKoonerResume.pdf",
    icon: <DocumentTextIconComponent />,
    label: "Resume",
  },
  {
    href: "mailto:seankooner@gmail.com",
    icon: <EnvelopeIconComponent />,
    label: "Email",
  },
];

const SocialLink = ({ href, icon, label }: Social) => (
  <div className="flex flex-col items-center space-y-2">
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>{icon}</div>
    </motion.a>
    <p className="mt-2 text-sm text-white">{label}</p>
  </div>
);

const Socials = () => (
  <div className="">
    <MeteorShower />
    <div className="z-10 grid grid-cols-2 flex-col items-center justify-between gap-4 space-y-6">
      {socials.map((social) => (
        <SocialLink key={social.label} {...social} />
      ))}
    </div>
  </div>
);

export default Socials;
