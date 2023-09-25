import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import SectionWrapper from '../Hoc/SectionWrapper';
import { projects } from './Constants';
import { fadeIn,textVariant } from '../utils/motion';

type WorkSampleCardProps ={
  key:string
  id:number
  sample: {
    name: string;
    description: string;
    tags: {
        name: string;
        color: string;
    }[];
    image: string;
    source_code_link: string;
     deployment: {
      on: string;
      link: string;
  
  }
  }}

 const WorkSampleCard = ({id,sample}:WorkSampleCardProps)=>{
  const {name,description,tags,source_code_link,image,deployment} = sample

  return(
    <motion.div
     variants={fadeIn("up",'spring',id * 0.5 ,0.75)}>
     <Tilt 
      className='bg-slate-900  p-1 rounded-2xl  h-full sm:w-[340px] w-full  '
     >
      <div className='  sm:h-[200px] w-full'>
        <img src={image} alt={name}
         className='h-[100%] w-[100%] object-cover rounded-2xl' 
         />
         <div className='absolute left-0 top-0 flex justify-end m-3 card-img_hover'>
          <div 
          onClick={()=> window.open(source_code_link,"_blank")}
           className='bg-slate-500 hover:bg-[#6d28d9]   w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img src="/assets/Github-icon.svg" alt="github"
            className='w-3/4 h-3/4 object-contain'
             />

          </div>
         </div>
      </div>
      <div className='mt-1 rounded-lg p-0.5  flex flex-col items-center'>
       <h3 className='text-cyan-400 '>{name}</h3>
       <p className='text-cyan-100 mt-1 text-[15px]'>{description}</p>
      </div>
      <div className='mt-3 flex flex-wrap gap-2'>
       { tags.map((tag,id)=>(
        <div key={`${tag.name}-${id}-yep`} className='bg-[#dcfce7] rounded-full p-1'>
        <p 
         className={`text-[14px]  ${tag.color}`}
        > 
         #{tag.name}
        </p>
        </div>
       ))}
      </div>
      <div className=' h-[5vh] hover:text-[#6d28d9]  p-2 text-cyan-400'>
        

        <p><a target='_blank' href={`${deployment.link}`}>Deployment link: {`${deployment.on}`}</a> </p>
      </div>
     </Tilt>
    </motion.div>
  )

 }
 const workSamples = () => {
  return (
  <>
    <motion.div variants={textVariant(0)}>
    <p  className={styles.sectionSubText} > Activity </p>
      <h3 className={styles.sectionHeadText} >Work Samples...</h3>

    </motion.div>
    <div className='w-full flex'>
     <motion.p
     variants={fadeIn("","",0.1,1)}
     className='mt-3 text-cyan-100 text-[17px] max-w-3xl leading-[30px]'
     >
      These below are just placeholders for my future work. I intend to make a lot of more
     advanced and solid ones to showcase my abilities in the near future.  
     </motion.p>
    </div>
    <div className='mt-20 flex justify-center align-top flex-row flex-wrap gap-7  '>{
      projects.map((sample,id)=>(
       <WorkSampleCard key={`sample-${id}`}
        id={id}
        sample={sample}
       />
      ))
    }

    </div>
  </>
  )
}

export const WorkSamples = SectionWrapper(workSamples,"Projects")