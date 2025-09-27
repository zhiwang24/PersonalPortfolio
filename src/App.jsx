import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { DottedBackground } from './components/DottedBackground';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/Resume';
import { Projects } from './components/Projects';
import { ProjectData } from './components/ProjectData';
import Skills from './components/Skills';
import { SkillsData } from './components/SkillsData';

function App() {
  return (
    <div className="App">
      <SpeedInsights/>
      <DottedBackground></DottedBackground>
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects items={ProjectData}></Projects>
      <Skills groups={SkillsData}></Skills>
      <ResumeSection></ResumeSection>
    </div>
  );
}

export default App;
