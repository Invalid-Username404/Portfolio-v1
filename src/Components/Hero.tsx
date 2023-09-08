import { styles } from "../styles"
import { motion } from "framer-motion"
import {  LaptopCanvas } from "./Canvas/Laptop"

export const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto" >
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
      max-w-7xl mx-auto flex flex-row items-start gap-5 
      `}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-sky-700 "/>
          <div className="w-1 sm:80 h-44 Cyan-gradient"/>
          </div>
          <div>
           <h1 className={`${styles.heroHeadText} text-white`}>Hello, I'm
            <span className="text-[#0284c7]"> Mohamed
            </span>
           </h1>
           <p className={`${styles.heroSubText} mt-2 text-white`}>
            I'm a web-app developer

           </p>
          </div>
      </div>
      <LaptopCanvas />
      <div className="absolute xs:bottom-10 bottom-[0px] w-full flex justify-center items-center">
       <a title="scroll down" href="#about">
        <div className="w-[25px] h-[50px] rounded-3xl border-4 border-[#8422c5]
        flex justify-center items-start p-0
        ">
          <motion.div animate={{ y:[0,10,0]}}
          transition={{duration:1.5, repeat:Infinity, repeatType:"loop"}}
          className="w-2 h-6 rounded-full bg-lime-600 mt-1"
           />

        </div>
       </a>
      </div>
    </section>
  )
}
