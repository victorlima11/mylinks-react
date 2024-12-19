import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaSpotify } from 'react-icons/fa'; // ícone do Spotify
import './App.css';

const SpotifyCard: React.FC = () => {
  const [spotifyData, setSpotifyData] = useState<any>(null);
  const userId = '1213192346276200512'; // Substitua pelo seu ID de usuário do Discord

  useEffect(() => {
    // Função para buscar as informações de atividades do usuário via Lanyard API
    async function fetchSpotifyActivity() {
      try {
        const response = await axios.get(`https://api.lanyard.rest/v1/users/${userId}`);
        const data = response.data.data;

        // Verificando se o usuário está ouvindo algo no Spotify
        if (data?.spotify) {
          setSpotifyData({
            name: data.spotify.song,
            artist: data.spotify.artist,
            albumArt: data.spotify.album_art_url,
          });
        } else {
          setSpotifyData(null);
        }
      } catch (error) {
        console.error('Erro ao buscar as informações do Spotify:', error);
      }
    }

    // Chama a função para buscar os dados
    fetchSpotifyActivity();
    // Atualiza os dados a cada 30 segundos
    const interval = setInterval(fetchSpotifyActivity, 30000);

    return () => clearInterval(interval); // Limpar intervalo ao desmontar o componente
  }, [userId]);

  return (
    <div className="spotify-card">
      {spotifyData ? (
        <div className="spotify-info">
          <img src={spotifyData.albumArt} alt="Album Art" className="album-art" />
          <div className="song-details">
            <h3>{spotifyData.name}</h3>
            <p>{spotifyData.artist}</p>
          </div>
          <div className="spotify-icon">
            <FaSpotify size={40} color="#1DB954" />
          </div>
        </div>
      ) : (
        <p>Não há atividade de Spotify no momento.</p>
      )}
    </div>
  );
};

export default SpotifyCard;
