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
import {Grid,Segment,Header,List,Icon,GridColumn,Menu,Label,Dimmer,Loader} from 'semantic-ui-react';
import DenunciaRespondida from '../components/DenunciaRespondida';
import { render } from '@testing-library/react';
import img1 from '../tempImgs/pao-de-queijo-mineiro-nr.jpg'
import img2 from '../tempImgs/queijadinha.jpg'
import axios from 'axios';

export default (props)=> {

  const [numero,setNumero] = useState(0);
  const [receita, setReceita] = useState();

   useEffect(()=> {
    axios({
      method: "GET",
      baseURL: "https://5734-187-21-180-6.ngrok.io/pendingrecipes",
      headers: {
        'token': localStorage.getItem("token")
      }
    })
    .then(response=>{
      console.log(response.data.data);
      setReceita(response.data.data);
    })
    .catch(err=>{
      console.log("deu pau :3");
    })
  },[])

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
        {receita?
        (
          receita.map(item=>{
            if(active=="pendente"){
              if(item.Comment_author){return <Receita/>}
              else {return <Receita/>}
            }else{
              if(item.Comment_author){return <Receita/>}
            }
          })

        )

        : (
          <Segment style={{height:"200px"}} floated>
            <Dimmer inverted active>
              <Loader>
                Carregando
              </Loader>
            </Dimmer>
          </Segment>
        )}
      </Grid.Column>
    </Grid>

    </>
  );
}
