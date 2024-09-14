import { motion } from "framer-motion";
import { styles } from "../styles";
import { LaptopCanvas } from "./Canvas/Laptop";

export const Hero = () => {
  return (
    <section
      className="relative w-full h-screen mx-auto"
      aria-label="Hero section"
    >
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#0284c7]">Mohamed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            A web developer specializing in React and NextJS
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 w-full h-[50vh] sm:h-[70vh]">
        <LaptopCanvas />
      </div>
    </section>
  );
};
