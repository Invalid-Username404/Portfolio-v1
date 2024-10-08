import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "./Constants";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../Hoc/SectionWrapper";
type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <Tilt className="xs:w-[250px] flex flex-wrap w-[25vw] ml-2 mr-2 flex-grow">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px]"
      >
        <div
          className="bg-black rounded-[20px] py-5 min-h-[280px] flex
          justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-16 h-16 object-contain"
            width="64"
            height="64"
          />
          <h4 className="text-white font-bold text-center">{title}</h4>
        </div>
      </motion.div>
    </Tilt>
  );
};

const about = () => {
  return (
    <>
      <motion.div variants={textVariant(0)}>
        <p className={styles.sectionSubText}>About:</p>
        <h2 className={styles.sectionHeadText}>Overview...</h2>
      </motion.div>
      <motion.p
        className="mt-1 text-gray-300 text-[20px] max-w-3xl leading-[27px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a web developer with experience in Javascript, Typescript,
        Javascript frameworks/libraries like React and Next.js, Redux State
        management, Nodejs backend technology, ExpressJs, relational and
        non-relational databases like MongoDB, and quality assurance tools like
        Jest and Cypress.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export const About = SectionWrapper(about, "about");
