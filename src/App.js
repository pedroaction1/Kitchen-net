import logo from './logo3.png';
import './App.css';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import pegaruser from './services/PegarUsuario/Getuser'


const Login = (props) => {

  const [ password, setPassword ] = useState();
  const [ username, setUsername] = useState();

  

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
                <input placeholder='Email'  type="email" name="email" id="email" {...username}  onClick={(e)=> {setUsername(e.target.value)}} autoComplete="new-password" className='input'></input>
              </div>
              <label className='GoodLabel' ><strong>Senha:</strong></label>
              <div>
                <input placeholder='Senha' type="password" name="senha" id="senha" {...password} onClick={(e)=> {setPassword(e.target.value)}}  autoComplete="new-password" className='input'></input>
              </div>

          </div>

          <div>
              <Link to="/pages/paginaprincipal">
                  <Button color="red">Login</Button>           
              </Link>
          </div>

          <h5>Esqueci a Senha</h5>

        </div>
      
      </div>
    </div>
  );
}

export default Login;
