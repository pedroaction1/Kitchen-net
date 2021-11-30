import logo from '../logo3.png';
import './paginaprincipal.css';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import '../logo3.png';
import './paginaprincipal.css';
import Denuncia from '../components/Denuncia'; 
import { Grid,Segment, Header,Icon,GridColumn,Menu,Loader,Dimmer} from 'semantic-ui-react';
import DenunciaRespondida from '../components/DenunciaRespondida';
import { render } from '@testing-library/react';
import axios from "axios"
import Sair from '../services/Sair'
import Rota from '../services/Rota'


export default (props)=> {

  const [active,setActive] = useState();
  const [denuncia,setDenuncia] = useState();
  const history = useHistory();
  
  if(localStorage.getItem("tipo") != 4){
    history.goBack();
  }

  useEffect(()=>{
    PuxarPendentes();
  },[])

  function PuxarPendentes(){
    axios({
      method: "POST",
      baseURL: Rota + "api/complaint/not_viewed",
      data: {
        'page': 0
      },
      headers: {
        'token': localStorage.getItem("token")
      }
    })
    .then(response=>{
      setDenuncia(response.data.data);
    })
    .catch(err=>{
      console.log("deu pau :3");
    })
  }

  function PuxarRespondidas() {
    axios({
      method: "POST",
      baseURL: Rota + "api/complaint/viewed",
      data:{
        'page': 0
      },
      headers: {
        'token': localStorage.getItem("token")
      }
    })
    .then(response=>{
      setDenuncia(response.data.data);
    })
    .catch(err=>{
      console.log("deu pau :3");
    })
  }

  function MostrarDenuncia(){
    if(denuncia != null){
      
      if(active == true){

        return(
          denuncia.map(item=>{
            if(item.Comment_author){return <Denuncia Autor={item.Sender} Razao={item.Complaint_type} Denunciado={item.Comment_author} Conteudo={item.Complaint} Id={item.Id} Image={item.thumbnail}/>}
            else {return <Denuncia Autor={item.Sender} Razao={item.Complaint_type} Denunciado={item.Playlist_author} Conteudo={item.Complaint} Id={item.Id} />}
          })
        )
      }
      else{
        return(
          denuncia.map(item=>{
            if(item.Comment_author){return <DenunciaRespondida Razao={item.Complaint} Status={item.Complaint_state} Data={item.data_of} Autor={item.Sender} Denunciado={item.Comment_author} Conteudo={item.Complaint} Id={item.Id} Image={item.thumbnail}/>}
            else {return <DenunciaRespondida Autor={item.Sender} Razao={item.Complaint_type} Denunciado={item.Playlist_author} Conteudo={item.Complaint} Id={item.Id}/>}
          })
        )
      }
    }
    
    else{
      return(
      <Segment style={{height:"200px"}} floated>
        <Dimmer inverted active>
          <Loader>
            Carregando
          </Loader>
        </Dimmer>
      </Segment>
      )
    }
  }

  return (
    
    <>
    <Segment style={{backgroundColor:"#e24333",display:"flex",alignItems:"center"}} className="Navbar">
      <div style={{display:"flex"}}>
          <img src={logo} className="LogoP" />
        <Header as="h1" style={{color:"white", marginTop:"3.5vh"}}>Denúncias Pendentes</Header>
      </div>

      <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"5%"}}>
        <Header as="h4" style={{color:"white"}}>logado como: {}</Header>
        <div className="NavLinks">
            <Link to="#" style={{color:"white",marginLeft:"20px"}}>
              Altera senha
            </Link>       
            <Link onClick={Sair} to="../" style={{color:"white",marginLeft:"20px"}} >
              Sair
            </Link>   
        </div>
      </div>
    </Segment>    

    <Grid style={{}}>
      <Grid.Column>
        <Menu vertical style={{marginLeft:"20px",padding:"1rem"}}>
          <Menu.Item name="pendentes" active={active === "pendentes"} onClick={(e)=>{setActive(true);PuxarPendentes();}}>
            Pendentes
          </Menu.Item>
          <Menu.Item name="respondidas" active={active === "respondidas"} onClick={(e)=>{setActive(false);PuxarRespondidas();}}>
            Respondidas
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column width={8} style={{margin:"auto"}}>
        {MostrarDenuncia()}

      </Grid.Column>
    </Grid>

    </>
  );
}
