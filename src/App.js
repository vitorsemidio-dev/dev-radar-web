import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithubUsername] = useState('');
  const [techs, setTechs] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input 
              onChange={e => setGithubUsername(e.target.value)}
              value={github_username}
              id="github_username"
              name="github_username"
              required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              onChange={e => setTechs(e.target.value)}
              value={techs}
              id="techs"
              name="techs"
              required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                onChange={e => setLatitude(e.target.value)}
                type="number"
                id="latitude"
                name="latitude"
                required
                value={latitude}/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                onChange={e => setLongitude(e.target.value)}
                type="number"
                id="longitude"
                name="longitude"
                required
                value={longitude}/>
            </div>
          </div>

          <button type="submit">Salvar</button>

        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52754546?s=460&v=4" alt="Vitor Emidio"/>
              <div className="user-info">
                <strong>Vitor Emidio</strong>
                <span>ReactJS, Angular, Node.js</span>
              </div>
            </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52754546?s=460&v=4" alt="Vitor Emidio"/>
              <div className="user-info">
                <strong>Vitor Emidio</strong>
                <span>ReactJS, Angular, Node.js</span>
              </div>
            </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52754546?s=460&v=4" alt="Vitor Emidio"/>
              <div className="user-info">
                <strong>Vitor Emidio</strong>
                <span>ReactJS, Angular, Node.js</span>
              </div>
            </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52754546?s=460&v=4" alt="Vitor Emidio"/>
              <div className="user-info">
                <strong>Vitor Emidio</strong>
                <span>ReactJS, Angular, Node.js</span>
              </div>
            </header>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
