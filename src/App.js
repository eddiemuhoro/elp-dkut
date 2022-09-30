
import './App.css'
import Footer from './Footer/Footer';
import Arrays from './Arrays/Arrays';
import Mentorship from './Mentorship/Mentorship';
import BtnSlider from './Components/Slider/BtnSlider';
import HeroPage from './Components/HeroPage/HeroPage';
import AboutUs from './Components/About/AboutUs';

function App() {
  return (
    <div className="App">
    <HeroPage/>
      <AboutUs />
    <Arrays/>

    <Footer />
    </div>
  );
}

export default App
