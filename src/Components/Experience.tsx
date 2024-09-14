import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "./Constants";
import SectionWrapper from "../Hoc/SectionWrapper";
import { textVariant } from "../utils/motion";
type ExperienceCardProps = {
  key: number;
  experience: {
    title: string;
    company_name: string;
    icon: string;
    iconBg: string;
    date: string;
    points: string[];
  };
};

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className=" flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={`${experience.company_name} logo`}
          className=" w-[62%] object-contain"
        />
      </div>
    }
  >
    <h3 className="text-white text-[25px] font-bold">{experience.title}</h3>
    <p className="text-cyan-200 text-[14px] mt-0">{experience.company_name}</p>
    <ul className="mt-4 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point${index}`}
          className="text-cyan-400 text-[18px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);
const experience = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}> What I'm working with </p>
        <h3 className={styles.sectionHeadText}>Work Experience...</h3>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export const Experience = SectionWrapper(experience, "experience");
