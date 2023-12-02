import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import AboutUs from './Components/AboutUs';
import Features from './Components/Features';
import Manage from './Components/Manage';
import Pricing from './Components/Pricing';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
      <Navbar />      
      <AboutUs/>
      <Features/> 
      <Manage/>
      <Pricing/>
      <Contact/> 
      <Footer/>               
    </div>
  );
}

export default App;
