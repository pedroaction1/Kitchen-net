import logo from '../logo3.png';
import './paginaprincipal.css';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../logo3.png';
import './paginaprincipal.css';
import Receita from '../components/Receita';
import ReceitaResponder from '../components/ReceitaResponder';
import DenunciaResponder from '../components/DenunciaResponder';
import Denuncia from '../components/Denuncia'; 
import { Grid, Segment, Header, List, Icon, GridColumn,Menu, Label, StepContent} from 'semantic-ui-react';
import DenunciaRespondida from '../components/DenunciaRespondida';
import { render } from '@testing-library/react';

const data = [
    {
        "Receita": "Batata frita sequinha e crocante",
        "Razao": "Desconforto",
        "Comentario": "Queimei a lingua nessa merda, muito ruim!",
        "Playlist": null,
        "Id": 1
    },
    {
          "Receita": "Pão de queijo doce",
          "Razao": "Ofensa",
          "Comentario": "Eu fiz e o não ficou doce!!",
          "Playlist": null,
          "Id": 2  
    },
    {
      "Receita": "Zé pagodinho funk do ovo",
      "Razao": "Ofensa",
      "Playlist": "Inapropriado!!",
      "Comentario": null,
      "Id": 3
}
]

const dataRes = [
  {
    "Receita": "Ovo cozido",
    "Razao": "Ofensa",
    "Tipo": "Playlist",
    "Denuncia": "Ovo feio pra cacete",
    "Data": "14/11/2021",
    "Status": "aprovado" 
  }
]

export default (props)=> {

  const [numero,setNumero] = useState(data.length - 1);
  const [active,setActive] = useState("pendentes");
  const [usuario, setUsuario] = useState("denuncia");

  function MonstrarDenuncia(){
     return(
        data.map(item=>{
            if(item.Comentario != null){
              return(<Denuncia Id={item.Id} Receita={item.Receita} Razao={item.Razao} Tipo="Playlist" Denuncia={item.Playlist}/>)
            }
            else{
              return(<Denuncia Id={item.Id} Receita={item.Receita} Razao={item.Razao} Tipo="Comentário" Denuncia={item.Comentario}/>)  
            }
        })
    )
  }

  const handleLogout = () => {
    props.history.push('/App');
  }


  return (
    
    <>
    <Segment style={{backgroundColor:"#e24333",display:"flex",alignItems:"center"}} className="Navbar">
      <div style={{display:"flex"}}>
          <img src={logo} className="LogoP" />
        <Header as="h1" style={{color:"white", marginTop:"6vh"}}>Denúncias pendentes</Header>
      </div>

      <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"5%"}}>
        <Header as="h4" style={{color:"white"}}>logado como: Sergio oliveira da silva carlos</Header>
        <div className="NavLinks">
            <Link to="#" style={{color:"white",marginLeft:"20px"}}>
              Altera senha
            </Link>       
            <Link to="../" style={{color:"white",marginLeft:"20px"}} >
              Sair
            </Link>   
        </div>
      </div>
    </Segment>    

    <Grid style={{}}>
      <Grid.Column>
        <Menu vertical style={{marginLeft:"20px",padding:"1rem"}}>
          <Menu.Item name="pendentes" active={active === "pendentes"} onClick={(e)=>{setActive("pendentes")}}>
            Pendentes
          </Menu.Item>
          <Menu.Item name="respondidas" active={active === "respondidas"} onClick={(e)=>{setActive("respondidas")}}>
            Respondidas
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column width="8" style={{margin:"auto"}}>
        {MonstrarDenuncia()}

      </Grid.Column>
    </Grid>

    </>
  );
}
