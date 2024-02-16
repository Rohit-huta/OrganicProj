import './App.css';
import Footer from './HomePage/Footer';

import Navbar from './HomePage/Navbar';
import Section1 from './HomePage/Section1';
import Section2 from './HomePage/Section2';
import Section3 from './HomePage/Section3';
import Section4 from './HomePage/Section4';
import Section5 from './HomePage/Section5';
import Section6 from './HomePage/Section6';
import backgroundImage from './assets/home.jpg';
function App() {
  return (
    <div className=' h-screen bg-center bg-cover' style={{ backgroundImage: `url(${backgroundImage}`}}>
      <div className='container mx-auto'>
        <Navbar />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Footer />

      </div>
    </div>
  );
}

export default App;
