
import './App.css';
import Navbar from './componets/Navbar';
import Hero from './page/Hero';
import Services from './page/Services';
import Number from './page/Number'
import Testimonials from './page/Testimonials';
import Contact from './page/Contact';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Services/>
      <Number/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
