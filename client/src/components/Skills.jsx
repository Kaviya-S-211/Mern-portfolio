// Skills.jsx
import React from 'react';
import './Skills.css';
import htmlImg from '../assets/html.jpg';
import cssImg from '../assets/css.jpg';
import bootstrapImg from '../assets/bootstrap.jpg';
import jsImg from '../assets/js.jpg';
import reactImg from '../assets/react.jpg';
import mernImg from '../assets/mern.jpg';


const skills = [
  { name: 'HTML', img: htmlImg },
  { name: 'CSS', img: cssImg },
  { name: 'Bootstrap', img: bootstrapImg },
  { name: 'JavaScript', img: jsImg },
  { name: 'React', img: reactImg },
  { name: 'MERN', img: mernImg },
];


const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My <span>Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-image">
              <img src={skill.img} alt={skill.name} />
            </div>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
