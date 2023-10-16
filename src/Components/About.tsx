import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from './Constants';
import { fadeIn,textVariant } from '../utils/motion';
import  SectionWrapper  from '../Hoc/SectionWrapper';
type ServiceCardProps ={
  index:number
  title:string
  icon:string
}

const ServiceCard = ({index, title, icon}:ServiceCardProps)=>{
  return(
    <Tilt  className='xs:w-[250px]  flex flex-wrap w-[25vw] ml-2 mr-2 flex-grow'>
      <motion.div variants={fadeIn("right","spring", 0.5 * index, 0.75 )}
       className='w-full green-pink-gradient p-[1px] ' >

         <div 
         className='bg-black rounded-[20px] py-5 min-h-[280px] flex
          justify-evenly items-center flex-col 
         '
        
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h4 className='text-white font-bold text-center'>
            {title}
          </h4>

        </div>
       

      </motion.div>

    </Tilt>
  )
}

 const about = () => {
  return (
    <>
    <motion.div   variants={textVariant(0)} >
      <p  className={styles.sectionSubText} >  About:</p>
      <h3 className={styles.sectionHeadText} >Overview...</h3>
    </motion.div>
    <motion.p 
     className='mt-1 text-gray-300 text-[20px] max-w-3xl leading-[27px]'
     variants={fadeIn("","",0.1,1)}>
        I'm a web-app developer with experience in Javascript, Typescript,
      Javascript frameworks/libraries like React and Next.js, Redux StateManegment,
       Nodejs backend technology, and MongoDB database
       . I'm a quick, effortful learner, a good listener, and careful and
       eager for incoming knowledge.
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service,index)=>(
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}

    </div>

    </>
  )
}
export const About = SectionWrapper(about,"about")