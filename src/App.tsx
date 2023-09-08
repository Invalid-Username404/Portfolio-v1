import { BrowserRouter } from "react-router-dom"

import { About } from "./Components/About"
import { Hero } from "./Components/Hero"
import { Navbar } from "./Components/Navbar"
import { Experience } from "./Components/Experience"
import { Techs } from "./Components/Techs"
import { WorkSamples } from "./Components/WorkSamples"
import { Feedbacks } from "./Components/Feedbacks"
import { Contact } from "./Components/Contact"






function App() {
  

  return (
    
    <BrowserRouter >
    <div className="relative z-0 bg-black">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"  >
      <Navbar/>
      <Hero/>
      
      </div>
      <About/>
      <Experience/>
      <Techs/>
      <WorkSamples/>
      <Feedbacks/>
      <div className="relative z-0">
        <Contact/>
        


      </div>




    </div>
 </BrowserRouter>
    
  )
}

export default App
