import logo from './logo3.png';
import './App.css';
import { Link,Redirect, useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import pegaruser from './services/PegarUsuario/Getuser'
import 'react-router-dom';

function Login(props) {

  const [ password, setPassword ] = useState("");
  const [ username, setUsername] = useState("");
  const [path,setPath] = useState();
  const history = useHistory();
    
  function Logar(){
    
    if(username == "moderador@gmail.com"){
      history.push("/pages/pagina")
    }
    else if(username == "curador@gmail.com"){
      history.push("/pages/paginaprincipal")
      //<Link to=""></Link>
    }
    else {
      console.log("bruh");

    }
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
                <input placeholder='Email'  type="email" name="email" id="email"  onChange={(e)=>{setUsername(e.target.value)}} className='input'></input>
              </div>
              <label className='GoodLabel' ><strong>Senha:</strong></label>
              <div>
                <input placeholder='Senha' type="password" name="senha" id="senha" {...password}  onChange={(e)=>{setPassword(e.target.value)}}  className='input'></input>
              </div>

          </div>

          <div>
              
              <Button color="red" onClick={()=>{Logar()}}>Login</Button>           
  
          </div>

          <h5>Esqueci a Senha</h5>

        </div>
      
      </div>
    </div>
  );
}

export default Login;
