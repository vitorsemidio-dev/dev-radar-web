import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';

function App() {
  const [devs, setDevs] = useState([]);

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

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  function cleanFileds() {
    setGithubUsername('');
    setTechs('');
  }

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    cleanFileds();

    setDevs([...devs, response.data]);
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
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>            
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
