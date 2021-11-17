import logo from '../logo3.png';
import './paginaprincipal.css';
import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import '../logo3.png';
import './paginaprincipal.css';
import Receita from '../components/Receita';
import ReceitaResponder from '../components/ReceitaResponder';
import DenunciaResponder from '../components/DenunciaResponder';
import Denuncia from '../components/Denuncia'; 
import { Grid, Segment, Header, List, Icon, GridColumn,Menu, Label} from 'semantic-ui-react';
import DenunciaRespondida from '../components/DenunciaRespondida';
import { render } from '@testing-library/react';
import img1 from '../tempImgs/pao-de-queijo-mineiro-nr.jpg'
import img2 from '../tempImgs/queijadinha.jpg'

export default (props)=> {

  const [numero,setNumero] = useState(0);


  const data = [
    {
      "Titulo": "Pão de Queijo Crocante",
      "Imagem": ''+ img1 +''
    },
    {
      "Titulo": "Queijadinha Perfeita",
      "Imagem": ''+ img2 +''
    }
  ]

  const dataRes = [
    {
      "Título": "Pão de Queijo Crocante",
      "Autor": "",
      "Sobre": "",
      "Data": "",
      "Porcoes": "",
      "Midia": "",
      "Ingrediente": "",

    }
  ]

  function MonstrarReceita(){
    return (
      data.map(item=>{
        return(
          <Receita Imagem={item.Imagem} Titulo={item.Titulo}/>
        )
      })
    )
  }

  const handleLogout = () => {
    props.history.push('/App');
  }
  const [active,setActive] = useState("pendentes");

  return (
    
    <>
    <Segment style={{backgroundColor:"#e24333",display:"flex",alignItems:"center"}} className="Navbar">
      <div style={{display:"flex"}}>
          <img src={logo} className="LogoP" />
        <Header as="h1" style={{color:"white", marginTop:"6vh"}}>Receitas pendentes</Header>
      </div>

      <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"5%"}}>
        <Header as="h4" style={{color:"white"}}>logado como: Alexadre da Silva Pereira</Header>
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
        {MonstrarReceita()}
      </Grid.Column>
    </Grid>

    </>
  );
}
