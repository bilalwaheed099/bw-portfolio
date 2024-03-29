type ExperienceProps = {
  company: string;
  title: string;
  time: string;
  desc: string;
  skills: string[];
};

export const Experience = ({
  company,
  title,
  time,
  desc,
  skills,
}: ExperienceProps) => {
  return (
    <div className="text-white flex flex-col md:flex-row items-center md:items-start justify-start gap-y-4 gap-x-12">
      <p className="md:w-[20%] text-white/30 text-md font-medium tracking-wide">
        {time}
      </p>
      <div className="w-[80%] flex flex-col text-center md:text-start ">
        <p className="text-gray-400 font-semibold text-[1.3rem]">{company}</p>
        <p className="mt-1 text-gray-100 font-bold text-[16px]">{title}</p>
        <p className="mt-3 text-white/30 text-[14px]">{desc}</p>
        <div className="flex flex-wrap justify-center md:justify-normal gap-3 mt-4">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
