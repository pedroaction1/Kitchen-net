import logo from './logo3.png';
import './App.css';
import React from 'react';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="BGR">
    <div className="App">
        <div className="Container">
          <div>
            <img src ={logo} className="Logo"></img>
          </div>

          <h3>
            Kitchen Net Login Admin
          </h3>

          <h3>
            <strong>Login</strong>
          </h3>
          
          <div className='LoginBox'> 

            <label className='GoodLabel' ><strong>Email:</strong></label>

            <div>
              <input placeholder='Email' className='input'></input>
            </div>

            <label className='GoodLabel' ><strong>Senha:</strong></label>

            <div>
              <input placeholder='Senha' className='input'></input>
            </div>

          </div>

          <div>
            <Link to="/pages/paginaprincipal">
             <button className='button'>Logar</button>
             </Link>
          </div>

          <h5>Esqueci a Senha</h5>

        </div>
      </div>
    </div>
  );
}

export default App;
