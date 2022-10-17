
import './App.css'
import Footer from './Footer/Footer';
import Arrays from './Arrays/Arrays';
import Mentorship from './Mentorship/Mentorship';
import BtnSlider from './Components/Slider/BtnSlider';
import HeroPage from './Components/HeroPage/HeroPage';
import AboutUs from './Components/About/AboutUs';
import Navbar from './Components/NavBar/Navbar';
import { Link } from 'react-scroll';
import Leaders from './Components/Leaders/Leaders';
import Jnavbar from './Components/JumiaNav/Jnavbar';

function App() {

  return (
    <div className="App">
      
     
      <Navbar/>
      <div id='home'>
      <HeroPage/>
      </div>
   
    
      <div id='about'>
          <AboutUs />
      </div>
      <div id='leaders'>
          <Leaders/>
      </div>
      <div id='gallery'>
          <Arrays/>
      </div>
  <Footer/>
    </div>
  )
}

export default App
