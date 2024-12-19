import React from 'react';

const ProjectList = () => {
  return (
    <div>
      {/* Seção de Projetos */}
      <div className="project-list">
        <div className="project-card">
          <img src="https://i.pinimg.com/736x/0b/b8/1a/0bb81acdf956ddf5786565c59de8de41.jpg" alt="Projeto 1" className="project-image" />
          <div className="project-info">
            <h3>Yuki Bot</h3>
            <p>Bot de discord desenvolvido para moderação, diversão e utilidade.</p>
            <div className="tech-names">
              <span className="tech-name">STATUS: OFFLINE</span>
            </div>
          </div>
          <a href="https://github.com/usuario/projeto1" target="_blank" rel="noopener noreferrer">
            <button className="code-button">Invite</button>
          </a>
        </div>
      </div>

      {/* Seção de Atalhos */}
      <div className="shortcut-folder">
        <div className="shortcut-icons">
          {/* Primeira linha de aplicativos */}
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://cdn-icons-png.flaticon.com/256/1384/1384060.png" alt="YouTube" />
            </div>
          </a>
          <a href="https://web.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </div>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="Instagram" />
            </div>
          </a>
          <a href="https://www.chatgpt.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/ChatGPT-Logo.svg" alt="ChatGPT" />
            </div>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Twitter_X.png" alt="Twitter" />
            </div>
          </a>

          {/* Segunda linha de aplicativos */}
          <a href="https://store.steampowered.com/" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam" />
            </div>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" />
            </div>
          </a>
          <a href="https://www.reddit.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b4/Reddit_logo.svg" alt="Reddit" />
            </div>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/40/Tiktok_Ebdaa.png" alt="TikTok" />
            </div>
          </a>
          <a href="https://br.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <div className="shortcut-item">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174863.png" alt="Pinterest" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
