import { BallCanvas } from "./Canvas/Ball"
import SectionWrapper from "../Hoc/SectionWrapper"
import { Technologies } from "./Constants"


 const techs = () => {
  return (
    <div className="flex flex-wrap justify-center gap-9">
     {
      Technologies.map((tech,id)=>(
        <div key={`tech ${tech} ${id}`} className="w-28 h-28">
         <BallCanvas icon={tech.icon}/>
        </div>

      ))
     }
    </div>
  )
}


export const Techs = SectionWrapper(techs,"techs")