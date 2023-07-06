"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  name: string;
  status: string;
  description: string;
  image: string | null;
  skills: string[];
}

interface ProjectCarouselProps {
  projects: Project[];
}

interface ProjectSkillsProps {
  skills: string[];
}

const ProjectSkills = ({ skills }: ProjectSkillsProps) => (
  <div className="">
    {skills.map((skill, idx) => (
      <span
        key={idx}
        className="mb-2 mr-2 inline-block rounded bg-cyan-600 px-2 py-1 text-xs text-white"
      >
        {skill}
      </span>
    ))}
  </div>
);

interface ProjectDetailsProps {
  project: Project;
}

interface ProjectStatusProps {
  status: string;
}

const ProjectStatus = ({ status }: ProjectStatusProps) => {
  const statusColor =
    status === "In production" ? "bg-green-500" : "bg-yellow-500";

  return (
    <span
      className={`inline-block rounded px-2 py-1 text-xs text-white ${statusColor}`}
    >
      {status}
    </span>
  );
};

const ProjectDetails = ({ project }: ProjectDetailsProps) => (
  <div>
    <h2 className="mb-2 mr-2 inline-block text-xl font-bold text-white">
      {project.name}
    </h2>
    <ProjectStatus status={project.status} />
    <p className="mb-4 text-white">{project.description}</p>
    <ProjectSkills skills={project.skills} />
  </div>
);

interface ProjectImageProps {
  project: Project;
}

const ProjectImage = ({ project }: ProjectImageProps) => (
  <motion.div
    className="relative mb-4 h-64"
    key={project.id}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {project.image ? (
      <Image
        src={project.image}
        alt={project.name}
        fill
        className="rounded-lg object-cover"
      />
    ) : (
      <Image
        src={"/projects/placeholder.png"}
        alt="Project placeholder image"
        fill
        className="rounded-lg object-cover"
      />
      // <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-600 text-xl text-gray-500">
      //   <CameraIcon className="h-12 w-12 text-gray-800" aria-hidden="true" />
      // </div>
    )}
  </motion.div>
);

interface ProjectNavigationProps {
  handlePrevious: () => void;
  handleNext: () => void;
}

const ProjectNavigation = ({
  handlePrevious,
  handleNext,
}: ProjectNavigationProps) => (
  <div className="mt-auto flex justify-between">
    <button
      onClick={handlePrevious}
      className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
    >
      Previous
    </button>
    <button
      onClick={handleNext}
      className="rounded-lg bg-gray-300 px-4 py-2 hover:bg-gray-400"
    >
      Next
    </button>
  </div>
);

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentProject = projects[currentIndex];
  if (!currentProject) return null;

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="grid w-full max-w-2xl rounded-lg bg-black bg-opacity-25 p-4 shadow-md"
        style={{ minHeight: "550px" }}
      >
        <ProjectImage project={currentProject} />
        <ProjectDetails project={currentProject} />
        <ProjectNavigation
          handlePrevious={handlePrevious}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
};

export default ProjectCarousel;
