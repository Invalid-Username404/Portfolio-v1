import {motion} from "framer-motion"
import { styles } from "../styles"
import SectionWrapper from "../Hoc/SectionWrapper"
import { fadeIn } from "../utils/motion"
import { testimonials } from "./Constants"
type FeedbackCardProps ={
  key:string
  index:number
  testimonial: {
    testimonial: string;
    name: string;
    designation: string;
    company: string;
    image: string;
}
}
const FeedbackCard = ({index,testimonial}:FeedbackCardProps)=>{
 const {name,designation, company, image, testimonial: saying } = testimonial
 return (
  <motion.div 
    variants={fadeIn("","",index * 0.5, 0.75)}
    className="bg-[#1d1836] p-4 rounded-3xl sm:w-[30vw] w-full "
   >

    <p className="font-black text-[45px] ">"</p>
    <div className="mt-1">
     <p className="text-cyan-100 tracking-wider text-[18px]">{saying}</p>

     <div  className="mt-7  flex  justify-between items-center gap-1">
      <div className="flex flex-1  flex-col">
       <p className="text-cyan-100 font-medium text-[16px]">
        <span className="blue-text-gradient">@</span>{name}
       </p>
       <p className="mt-1 text-[#ecfeff] text-[12px]">
        {designation} at {company}
       </p>
      </div>
      <img src={image} alt={`feedback-by-${name}`}
          className="w-12 h-12 rounded-full object-cover"
        />
     </div>
    </div>
  </motion.div>
 )

}


 const feedbacks = () => {
  return (
    <div className="mt-10 bg-slate-900 rounded-[20px]">
      <div className={`${styles.padding}  rounded-2xl min-h-[300px]`}>
       <motion.div >
       <p className={`${styles.sectionSubText}`}>What Others Say:</p>
       <h3 className={`${styles.sectionHeadText}`}>Testimonials...</h3>
       </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
       {
        testimonials.map((testimonial,index)=>(
         <FeedbackCard
          key={testimonial.name}
          index={index}
          testimonial={testimonial}
          />
        ))
       }
      </div>
    </div>
  )
}

export const Feedbacks =SectionWrapper(feedbacks,"feedbacks") 