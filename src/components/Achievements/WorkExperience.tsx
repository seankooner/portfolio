"use client";

interface WorkExperienceItemProps {
  companyName: string;
  title: string;
  dateRange: string;
  points: string[];
}

const WorkExperienceItem = ({
  companyName,
  title,
  dateRange,
  points,
}: WorkExperienceItemProps) => {
  return (
    <div className="grid gap-1">
      <span className="text-xl font-bold leading-none text-white shadow-md transition-all sm:text-3xl md:text-xl lg:text-2xl xl:text-3xl">
        {title}
      </span>

      <ul className="grid gap-2 rounded-md bg-container-gradient-dark p-2 text-sm text-gray-300">
        {points.map((point, index) => (
          <li key={index}>- {point}</li>
        ))}
      </ul>

      <div className="flex items-center justify-end gap-2 text-white ">
        <span className="text-sm font-extralight ">@ {companyName}</span>
        <span className="rounded-md bg-cyan-600 p-1 text-xs text-white ">
          {dateRange}
        </span>
      </div>
    </div>
  );
};

interface WorkExperienceProps {
  workExperiences: WorkExperienceItemProps[];
}

const WorkExperience = ({ workExperiences }: WorkExperienceProps) => {
  return (
    <section>
      <div className="grid gap-10">
        {workExperiences.map(({ companyName, title, dateRange, points }) => (
          <WorkExperienceItem
            companyName={companyName}
            title={title}
            dateRange={dateRange}
            points={points}
            key={companyName}
          />
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
