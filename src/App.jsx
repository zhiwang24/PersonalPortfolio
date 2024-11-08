import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DottedBackground } from './components/DottedBackground';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { AboutMe } from './components/AboutMe';


function App() {
  return (
    <div className="App">
      <DottedBackground></DottedBackground>
      <NavBar></NavBar>
      <Banner></Banner>
      <AboutMe></AboutMe>
    </div>
  );
}

export default App;