import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form action="">
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input id="github_username" name="github_username" required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input id="techs" name="techs" required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input id="latitude" name="latitude" required/>
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input id="longitude" name="longitude" required/>
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52754546?s=460&v=4" alt="Vitor Emidio"/>
              <div className="user-info">
                <strong>Vitor Emidio</strong>
                <span>ReactJS, Angular, Node.js</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52754546?s=460&v=4" alt="Vitor Emidio"/>
              <div className="user-info">
                <strong>Vitor Emidio</strong>
                <span>ReactJS, Angular, Node.js</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
            </header>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars1.githubusercontent.com/u/52754546?s=460&v=4" alt="Vitor Emidio"/>
              <div className="user-info">
                <strong>Vitor Emidio</strong>
                <span>ReactJS, Angular, Node.js</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro repellendus laudantium atque impedit! Est nobis magnam
              </p>
              <a href="https://github.com/vitorsemidio-dev">Acessar Perfil</a>
            </header>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
