import React from 'react';
import './Projects.css';
import girlyyglam from '../assets/Girlyyglam.png';
import meeshodating from '../assets/meeshodating.png';
import musiccyy from '../assets/musiccyy.png';
import simpletodo from '../assets/Simpletodo.png';
import portfolio from '../assets/portfolio.png'; // Assuming you have a portfolio image

const projects = [
  {
    name: 'Girlyy Glam',
    description: 'An elegant online cosmetic and beauty store built with Html & Css.',
    image: girlyyglam,
    link: 'https://girlyyglam.vercel.app/',
  },
  {
    name: 'Meesho Dating',
    description: 'A fun dating web app inspired by Meesho UI, made with React.',
    image: meeshodating,
    link: 'https://meesho-dating.vercel.app/',
  },
  {
    name: 'Musiccyy',
    description: 'A stylish music player with React, dark UI and custom playlists.',
    image: musiccyy,
    link: 'https://musiccyy.vercel.app/',
  },
  {
    name: 'Simple To-do List',
    description: 'A clean and responsive to-do list app with local storage.',
    image: simpletodo,
    link: 'https://simple-to-do-list-smoky.vercel.app/',
  },
  {
    name: 'Portfolio Website',
    description: 'My personal portfolio website built with MERN.',
    image: portfolio, 
    link: 'https://mern-portfolio-self.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {project.image && (
              <img src={project.image} alt={project.name} className="project-image" />
            )}
            <div className="project-overlay">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              {project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-button">
                  View Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;




