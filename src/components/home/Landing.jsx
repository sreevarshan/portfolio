import Hero from "./landing/Hero.jsx";
import TechStack from "./landing/TechStacks.jsx";
import WorkExperience from "./landing/WorkExperience.jsx";

const Landing = () => {
  return (
    <>
      <Hero />
      <div id="techstacks"><TechStack /></div>
      <div id="workexperience"><WorkExperience /></div>
    </>
  );
};

export default Landing;
