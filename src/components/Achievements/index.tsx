"use client";
import ProjectCarousel from "@/components/Achievements/ProjectCarousel";
import WorkExperience from "@/components/Achievements/WorkExperience";

const projects = [
  {
    id: "project-id",
    name: "Luminos",
    description:
      "A B2B SaaS that offers inventory, fulfillment and manufacturing solutions- tailored for e-commerce businesses. ",
    image: "/projects/luminos.png",
    status: "In progress",
    skills: [
      "Typescript",
      "Next.js",
      "Tailwind",
      "PlanetScale",
      "Prisma",
      "Vercel",
      "Clerk",
    ],
  },
  {
    id: "project-id2",
    name: "Portfolio",
    description:
      "The site you're currently on- showcasing my work, skills, and experience.",
    image: "/projects/portfolio.png",
    status: "In production",
    // image: "/path/to/image.jpg", // or null if no image
    skills: [
      "Typescript",
      "Next.js",
      "Tailwind",
      "Framer Motion",
      "Three.js",
      "React Spring",
      "Formik",
      "Resend",
      "Vercel",
    ],
  },
  {
    id: "project-id5",
    name: "Inventory Management System",
    description:
      "An in-house application specifically designed for the company's unique needs. Streamlined the sale-to-close process.",
    image: null,
    status: "In production",
    skills: ["JavaScript", "React", "Node", "Material UI", "MySQL"],
  },
  {
    id: "project-id4",
    name: "Manufacturing UI",
    description:
      "A program built to assist the manufacturing department in prioritizing and planning tasks with a user-friendly ui.",
    image: null,
    status: "In production",
    skills: ["JavaScript", "Next.js", "MongoDB", "AWS", "Styled Components"],
  },
  {
    id: "project-id3",
    name: "eCommerce Site",
    description:
      "Frontend and admin portal. Included all standard modern features of an online store.",
    image: null,
    status: "In production",
    // image: "/path/to/image.jpg", // or null if no image
    skills: ["Laravel", "PHP", "CSS", "MySQL", "WHM", "GCE", "JQuery", "Ajax"],
  },
  {
    id: "project-id6",
    name: "Shipping Software",
    description:
      "A system to automate shipping logistics: analyzing orders, determining shipping methods, box sizes, communicate with equipment (ex. Scales), and more. Helped create a significant increase in shipping efficiency.",
    image: null,
    status: "In production",
    skills: ["TypeScript", "Next.js", "Tailwind", "MongoDB", "AWS", "Vercel"],
  },
];

const workExperiences = [
  {
    companyName: "BuildASoil",
    title: "Lead Full Stack Developer",
    dateRange: "Aug '19 to Jun '23",
    points: [
      "Guided a team of 4 through the successful development and deployment of an extensive internal ERP & MRP system",
      "Streamlined business processes, significantly reducing costs",
      "Implemented project management strategies, employing sprints, Gantt charts, and other tools to consistently meet our KPIs",
    ],
  },
  {
    companyName: "Leather Treaty",
    title: "Full Stack Web Developer",
    dateRange: "Jun '15 to Dec '19",
    points: [
      "Engineered a comprehensive e-commerce platform",
      "Designed and developed a range of internal web apps",
      "Automated key design, manufacturing and logistical processes",
    ],
  },
  {
    companyName: "Vitalize",
    title: "Freelancer",
    dateRange: "Aug '10 to Present",
    points: [
      "Tackle a wide range of projects from design to coding",
      "Specialize in Node.js and React development",
      "Accelerates my growth as a Full Stack Developer",
    ],
  },
];

const AchievementsSection = () => {
  return (
    <section className="m-auto mb-40 grid max-w-7xl items-center gap-40 px-5 md:grid-cols-2 md:gap-20">
      <div>
        <h2 className="text-3xl font-bold text-white transition-all sm:text-6xl md:text-4xl lg:text-5xl xl:text-6xl">
          Achievements
        </h2>
        <h2 className="mb-4 text-lg font-thin leading-none text-white transition-all sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl">
          Check out some of my work!
        </h2>
        <ProjectCarousel projects={projects} />
      </div>
      <WorkExperience workExperiences={workExperiences} />
    </section>
  );
};

export default AchievementsSection;
