import './App.css';

import Intro from './components/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Services from './components/services/Services';
import Experience from './components/experience/Experience';
import Work from './components/work/Work';
import Portfolio from './components/portfolio/Portfolio';
import Testimonial from './components/testimonial/Testimonial';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
    return ( 
    <div className="App">
    <Navbar />  
    <Intro />
    <Services />
    <Experience />
    <Work/>
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    
    </div>
    );
}

export default App;