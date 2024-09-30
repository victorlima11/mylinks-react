// src/App.tsx
import React from 'react';
import './App.css';
import { FaGithub, FaDiscord, FaTwitch, FaYoutube, FaSteam } from 'react-icons/fa'; // Ícones

import { FaReact } from 'react-icons/fa'; // Ícone do React
import { FaNodeJs } from 'react-icons/fa'; // Ícone do Node.js
import { SiTypescript } from 'react-icons/si'; // Ícone do TypeScript
import { FaGitAlt } from 'react-icons/fa'; // Ícone do Git

const App: React.FC = () => {
  return (
    <div className="app-container">
      <video autoPlay muted loop className="background-video">
        <source src=".\videos\rain.mp4" type="video/mp4" />
      </video>

      <div className="profile-card">
        <div className="profile-content">
          <img src="/images/profile.jpg" alt="Perfil" className="profile-image" />
          <div className='profile-text'>
            <h1>Victor</h1>
            <p>Desenvolvedor de Software</p>
          </div>
        </div>
        <div className="social-links">
          <a href="https://discord.com/users/nyuh999" target="_blank" rel="noreferrer" className="social-button">
            <FaDiscord />
            <span>Discord</span>
          </a>
          <a href="https://github.com/victorlima11" target="_blank" rel="noreferrer" className="social-button">
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a href="https://www.twitch.tv/nyuh999" target="_blank" rel="noreferrer" className="social-button">
            <FaTwitch />
            <span>Twitch</span>
          </a>
          <a href="https://www.youtube.com/@nyuh777" target="_blank" rel="noreferrer" className="social-button">
            <FaYoutube />
            <span>Youtube</span>
          </a>
          <a href="https://steamcommunity.com/profiles/76561199476061697/" target="_blank" rel="noreferrer" className="social-button">
            <FaSteam />
            <span>Steam</span>
          </a>
        </div>

        <div className="profile-tech">
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className='tech-button ts-button'>
            <div className="icon-container">
              <SiTypescript />
            </div>
            <div className="text-container">
              <span>TypeScript</span>
            </div>
          </a>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className='tech-button react-button'>
            <div className="icon-container">
              <FaReact />
            </div>
            <div className="text-container">
              <span>React</span>
            </div>
          </a>
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className='tech-button node-button'>
            <div className="icon-container">
              <FaNodeJs />
            </div>
            <div className="text-container">
              <span>Node.js</span>
            </div>
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className='tech-button git-button'>
            <div className="icon-container">
              <FaGitAlt />
            </div>
            <div className="text-container">
              <span>Git</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
};

export default App;
