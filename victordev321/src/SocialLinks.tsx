import React from 'react';
import { FaGithub, FaDiscord, FaSpotify, FaTwitter, FaYoutube, FaTwitch, FaSteam } from 'react-icons/fa';  // Ícones

const SocialLinks: React.FC = () => {
  return (
    <div className="Nova1">
      <h1>Social Links</h1>
      <div className="social-links">
        {/* GitHub */}
        <a href="https://github.com/victorlima11" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaGithub size={30} />
          <span>GitHub</span>
        </a>
        {/* Discord */}
        <a href="https://discord.com/users/1220939249918939218" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaDiscord size={30} />
          <span>Discord</span>
        </a>
        {/* Spotify */}
        <a href="https://open.spotify.com/user/hajakwncomg3et3jv645gky2s?si=84d75577adf94fa9" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaSpotify size={30} />
          <span>Spotify</span>
        </a>
        {/* Twitter */}
        <a href="https://x.com/vihc333" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaTwitter size={30} />
          <span>Twitter</span>
        </a>
        {/* YouTube */}
        <a href="https://www.youtube.com/@nyuh777" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaYoutube size={30} />
          <span>YouTube</span>
        </a>
        {/* Twitch */}
        <a href="https://twitch.tv/nyuhvlr" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaTwitch size={30} />
          <span>Twitch</span>
        </a>
        {/* Steam */}
        <a href="https://steamcommunity.com/profiles/76561199476061697/" target="_blank" rel="noopener noreferrer" className="social-btn">
          <FaSteam size={30} />
          <span>Steam</span>
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
