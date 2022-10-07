
import './App.css'
import Footer from './Footer/Footer';
import Arrays from './Arrays/Arrays';
import Mentorship from './Mentorship/Mentorship';
import BtnSlider from './Components/Slider/BtnSlider';
import HeroPage from './Components/HeroPage/HeroPage';
import AboutUs from './Components/About/AboutUs';
import AboutInner from './Components/About/AboutInner/AboutInner';
import Navbar from './Components/NavBar/Navbar';
import { Link } from 'react-scroll';
import Leaders from './Components/Leaders/Leaders';

function App() {

  return (
    <div className="App">
      
      
      <Navbar/>
    <HeroPage/>
    
      <div id='about'>
          <AboutUs />
      </div>
      <div id='gallery'>
          <Leaders/>
      </div>
      <div id='gallery'>
          <Arrays/>
      </div>
  <Footer/>
    </div>
  );
}

export default App
