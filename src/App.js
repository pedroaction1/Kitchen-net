import logo from './logo3.png';
import './App.css';
import {useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import {Button} from 'semantic-ui-react';
import axios from 'axios'
import 'react-router-dom';

function Login(props) {

  localStorage.clear();

  const [ password, setPassword ] = useState("");
  const [ username, setUsername] = useState("");
  const history = useHistory();
  
  function RodarReceita(){
      axios({
        method: 'post',
        baseURL: 'http://8316-2804-38a-a02b-7e15-b4d4-3da0-fda4-8794.ngrok.io/api/recipe',
        data:{
          "name":"Freddy",
          "description":"Receita do Freddy",
          "portions": 1,
          "difficulty": 1,
          "recommended_level": 1,
          "categories": [],
          "igredients": "|leite condensado,395,g de|leite,1,litro|",
          "steps": []
        },
        headers:{
          'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dpbiI6ImhlbnJpcXVlQGdtYWlsLmNvbSIsImlhdCI6MTYzNzgzOTY4NiwiZXhwIjoxNjM3ODY4NDg2fQ.OUrit38GAtKmt4wT-uvOe1jJ5q_JuGmXBMSWJZfewUo"
        }
      })
  }

  async function Logar(){
    axios({
      method: 'post',
      baseURL: 'http://8316-2804-38a-a02b-7e15-b4d4-3da0-fda4-8794.ngrok.io/api/validate',
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
        console.log("Login Incorreto!");
      }

    })
  }  

  return (
    <div className="BGR">
      <div className="App">
        <div className="Container">

          <div>
            <img src ={logo} className="Logo" alt="logo da Kitchen Net"></img>
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
  
              <Button onClick={()=>{RodarReceita()}}>Rodar Receita</Button>

          </div>

          <h5>Esqueci a Senha</h5>

        </div>
      
      </div>
    </div>
  );
}

export default Login;
