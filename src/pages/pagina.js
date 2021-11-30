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

  const [active,setActive] = useState(true);
  const [usuario, setUsuario] = useState("denuncia");
  const [denuncia,setDenuncia] = useState();
  const history = useHistory();
  
  if(localStorage.getItem("tipo") != 4){
    history.goBack();
  }

  function PuxarNaoRespondidas(){
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
      console.log(response.data.data);
      setDenuncia(response.data.data);
    })
    .catch(err=>{
      console.log("deu pau :3");
    })
  }

  const handleLogout = () => {
    props.history.push('/App');
  }

  function PuxarRespondidas() {
    axios({
      method: "POST",
      baseURL: Rota + "api/complaint/viewed",
      data: {
        'page': 0
      },
      headers: {
        'token': localStorage.getItem("token")
      }
    })
    .then(response=>{
      console.log(response.data.data);
      setDenuncia(response.data.data);
    })
    .catch(err=>{
      console.log("deu pau :3");
    })
  }

  function MostrarDenuncia(){
    if(denuncia == true){
      
      if(active == true){
        denuncia.map(item=>{
          if(item.Comment_author){return <Denuncia Autor={item.Comment_author} Razao={item.Complaint_type} Denunciado={item.Sender} Conteudo={item.Complaint} Id={item.Id} Image={item.thumbnail}/>}
          else {return <Denuncia Autor={item.Playlist_author} Razao={item.Complaint_type} Denunciado={item.Sender} Conteudo={item.Complaint} Id={item.Id} />}
        })
      }
      else{
        denuncia.map(item=>{
          if(item.Comment_author){return <Denuncia Autor={item.Comment_author} Razao={item.Complaint_type} Denunciado={item.Sender} Conteudo={item.Complaint} Id={item.Id} Image={item.thumbnail}/>}
          else {return <Denuncia Autor={item.Playlist_author} Razao={item.Complaint_type} Denunciado={item.Sender} Conteudo={item.Complaint} Id={item.Id} />}
        })
      }
    }
    
    else{
      <Segment style={{height:"200px"}} floated>
      <Dimmer inverted active>
        <Loader>
          Carregando
        </Loader>
      </Dimmer>
    </Segment>
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
          <Menu.Item name="pendentes" active={active === "pendentes"} onClick={(e)=>{setActive(true), PuxarNaoRespondidas()}}>
            Pendentes
          </Menu.Item>
          <Menu.Item name="respondidas" active={active === "respondidas"} onClick={(e)=>{setActive(false), PuxarRespondidas()}}>
            Respondidas
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <Grid.Column width={8} style={{margin:"auto"}}>
        {denuncia?

        (
          denuncia.map(item=>{
            if(item.Comment_author){return <Denuncia Autor={item.Comment_author} Razao={item.Complaint_type} Denunciado={item.Sender} Conteudo={item.Complaint} Id={item.Id} Image={item.thumbnail}/>}
            else {return <Denuncia Autor={item.Playlist_author} Razao={item.Complaint_type} Denunciado={item.Sender} Conteudo={item.Complaint} Id={item.Id} />}
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
