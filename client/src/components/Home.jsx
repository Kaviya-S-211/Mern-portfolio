import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';


const Home = () => {
  return (
    <section className="home" id="home">
      

      <div className="home-content">
        <h1>Hi, I'm <span>Kaviya</span> 👋</h1>

        <h2 className="typewriter">
          <Typewriter
            words={[
              'Frontend Developer',
              'MERN Stack Dev',
             
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="subtitle">
          I craft beautiful websites & love turning ideas into reality.
        </p>

        <div className="home-buttons">
         <a href="/S_Kaviya_Resume-mern.pdf" download className="resume-btn">
                 Download Resume 📥
                 </a>

        </div>
      </div>
    </section>
  );
};

export default Home;
