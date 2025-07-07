import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      
       <section id="projects" className="projects-section">
        <Projects />
      </section>

        <section id="contacts" className="contact-section"><Contact />
        </section>

      
      
    </div>
  );
}

export default App;

