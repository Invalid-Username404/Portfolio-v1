import { styles } from "../styles";
import { LaptopCanvas } from "./Canvas/Laptop";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5 
      `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-sky-700 " />
          <div className="w-1 sm:80 h-44 Cyan-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm
            <span className="text-[#0284c7]"> Mohamed</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            a web developer
          </p>
        </div>
      </div>

      <div className="absolute bottom-[-10%] left-[-20%] h-[550px] w-full">
        <LaptopCanvas />
      </div>
    </section>
  );
};
