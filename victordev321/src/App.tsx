import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FaArrowLeft, FaProjectDiagram } from 'react-icons/fa';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './App.css';
import SpotifyCard from './SpotifyCard'; // Importe o componente do SpotifyCard
import SocialLinks from './SocialLinks';
import ProjectList from './ProjectList';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const App: React.FC = () => {
  const [commitsData, setCommitsData] = useState<any>(null);
  const [dates, setDates] = useState<string[]>([]);
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    async function fetchCommits() {
      const res = await fetch('https://api.github.com/users/victorlima11/events');
      const events = await res.json();
      const commitDates: string[] = [];
      const commitData: number[] = [];
  
      events.forEach((event: any) => {
        if (event.type === 'PushEvent') {
          const commitDate = new Date(event.created_at).toLocaleDateString('pt-BR', { weekday: 'short' }); // Mudar para exibir o nome do dia
          const index = commitDates.indexOf(commitDate);
          if (index === -1) {
            commitDates.push(commitDate);
            commitData.push(1);
          } else {
            commitData[index] += 1;
          }
        }
      });
  
      setDates(commitDates);
      setData(commitData);
  
      setCommitsData({
        labels: commitDates,  // Usando commitDates como rótulos
        datasets: [
          {
            label: 'Commits por dia',
            data: commitData,
            borderColor: '#2196F3',  // Definindo a cor da linha
            backgroundColor: 'rgba(33, 150, 243, 0.2)',  // Cor de fundo da área do gráfico
            borderWidth: 2,  // Largura da linha
            tension: 0.4,  // Suaviza a linha
          },
        ],
      });
    }
  
    fetchCommits();
  }, []);
  

  return (
    <div className="app-container">
      <video autoPlay muted loop className="background-video">
        <source src="./videos/rain.mp4" type="video/mp4" />
      </video>

      {/* Dashboard transparente */}
      <div className="dashboard-container">
        <div className="main-layout">
          {/* Coluna esquerda */}
          <div className="left-column">
            {/* Card de imagem */}
            <div className="profile-image-card">
              <div className="profile-image-text">
                <img src="/images/profile.jpg" alt="Perfil" className="profile-image" />
                <div className="profile-text">
                  <h1>
                    Victor{' '}
                    <span className="badge">
                      <FaProjectDiagram /> Dev
                    </span>
                  </h1>
                  <p>Software Developer</p>
                </div>
              </div>
            </div>

            {/* Card de commits */}
            <div className="commit-card">
              <h2>Commits no GitHub</h2>
              {commitsData ? (
                <Line data={commitsData} height={150} />
              ) : (
                <p>Carregando gráficos de commits...</p>
              )}
            </div>

            <div className="utils">
                <SpotifyCard />
            </div>
          </div>

          {/* Coluna direita */}
          <div className="right-column">
            <div className="teste">
              <ProjectList/>
            </div>
            <div className="teste-large">
              <h1>Search</h1>
              <form
                onSubmit={(e) => {
                  e.preventDefault(); // Evita o envio padrão do formulário
                  const query = (document.getElementById('search-input') as HTMLInputElement).value; // Obtém o valor do input
                  if (query) {
                    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank'); // Pesquisa no Google
                  }
                }}
              >
                <div className="search-container">
                  <input
                    type="text"
                    id="search-input"
                    placeholder=""
                    className="search-input"
                  />
                  <button type="submit" className="search-button">
                    <i className="fas fa-search search-icon"></i> {/* Ícone de lupa minimalista */}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Coluna terceira */}
          <div className="third-column">
              <SocialLinks/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
