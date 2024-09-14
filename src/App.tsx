import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { About } from "./Components/About";
import { Hero } from "./Components/Hero";
import { Navbar } from "./Components/Navbar";
import { Experience } from "./Components/Experience";
import { Techs } from "./Components/Techs";
import { WorkSamples } from "./Components/WorkSamples";
import { Feedbacks } from "./Components/Feedbacks";
import { Contact } from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Mohamed's Portfolio</title>
        <meta
          name="description"
          content="Web developer portfolio showcasing projects and skills in React, NextJS, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="relative z-0 bg-black">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Techs />
        <WorkSamples />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
