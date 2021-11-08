import logo from './logo3.png';
import './App.css';
import { Link } from 'react-router-dom';
import  LoginUser  from './services/api';
import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';

function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    LoginUser();
  }

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
              <input placeholder='Email' {...username}  autoComplete="new-password" className='input'></input>
            </div>

            <label className='GoodLabel' ><strong>Senha:</strong></label>

            <div>
              <input placeholder='Senha' {...password} autoComplete="new-password" className='input'></input>
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

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;
