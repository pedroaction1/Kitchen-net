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
        "Data": "14/11/2021",
        "Id": 1
    },
    {
          "Receita": "Pão de queijo doce",
          "Razao": "Ofensa",
          "Comentario": "Eu fiz e o não ficou doce!!",
          "Data": "12/11/2021",
          "Id": 2  
    },
    {
      "Receita": "Pão de queijo doce",
      "Razao": "Ofensa",
      "Comentario": "Eu fiz e o não ficou doce!!",
      "Data": "12/11/2021",
      "Id": 2  
}
]

export default (props)=> {

  const [numero,setNumero] = useState(data.length - 1);

  function MonstrarDenuncia(){
    
    return(
    data.map(item=>{
        return(
        <Denuncia Receita={item.Receita} Razao={item.Razao} Comentario={item.Comentario} 
        Data={item.Data} onChange={()=> {setNumero(numero - 1)}}/>
        )
    })
    )
  }

  const handleLogout = () => {
    props.history.push('/App');
  }
  const [active,setActive] = useState("pendentes");
  const [usuario, setUsuario] = useState("denuncia");

  useEffect(()=>{
      setNumero(numero + 1);
      console.log("ahhhh")
      return ()=>{
          setNumero(numero - 1);
      }
  },[])

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
            <Label color="red">{numero}</Label>
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
