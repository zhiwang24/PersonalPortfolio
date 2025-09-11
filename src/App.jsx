import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DottedBackground } from './components/DottedBackground';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';


function App() {
  return (
    <div className="App">
      <DottedBackground></DottedBackground>
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Experience></Experience>
      <Projects></Projects>
    </div>
  );
}

export default App;
