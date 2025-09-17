import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DottedBackground } from './components/DottedBackground';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/Resume';


function App() {
  return (
    <div className="App">
      <DottedBackground></DottedBackground>
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <ResumeSection></ResumeSection>
    </div>
  );
}

export default App;
