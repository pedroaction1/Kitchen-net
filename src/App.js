import logo from './logo3.png';
import './App.css';
import { Link,Redirect, useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import pegaruser, { cu } from './services/PegarUsuario/Getuser'
import axios from 'axios'
import 'react-router-dom';

function Login(props) {

  const [ password, setPassword ] = useState("");
  const [ username, setUsername] = useState("");
  const [path,setPath] = useState();
  const history = useHistory();
  
  
  async function Logar(){
    axios({
      method: 'post',
      baseURL: 'https://e067-2804-18-8c1-877e-d0c2-a42d-cdd2-a916.ngrok.io/validate',
      data:{
        "login": username,
        "password": password
      },
    })
    .then(data=>{
      localStorage.setItem("token", data.data.token)
      localStorage.setItem("valido", data.data.validated)
      localStorage.setItem("tipo", data.data.type)

      if (localStorage.getItem("tipo") == 4)
      {
          history.push('./pages/pagina')
      }else if (localStorage.getItem("tipo") == 3){
          history.push('./pages/paginaprincipal')
      }else{
        console.log("ih deu erro!")
      }

    })
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
                <input placeholder='Senha' type="password" name="senha" id="senha"  onChange={(e)=>{setPassword(e.target.value)}}  className='input'></input>
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
