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
      "Comentario": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse congue, nisl a feugiat consequat, orci eros mattis urna, a pulvinar turpis ex non leo. In pretium tristique est, ut sodales nunc aliquam et. Phasellus et ex semper, aliquam ante id, fermentum massa. Suspendisse ut dui varius, scelerisque ligula ut, euismod nulla. Ut libero nisl, finibus quis turpis a, scelerisque euismod magna. Morbi sit amet velit erat. Duis lacinia, quam sed vulputate ultricies, eros nibh mollis ante, quis accumsan augue elit efficitur mauris. Etiam hendrerit et nibh fermentum condimentum. Suspendisse fermentum pharetra orci, in gravida metus venenatis porta. Proin rutrum purus non neque imperdiet fermentum. Sed venenatis posuere magna, ac mattis dolor tristique ac. Sed vehicula nisi eget diam placerat laoreet. Pellentesque tincidunt fringilla quam, at laoreet magna sollicitudin rutrum. Sed in pharetra urna. Proin mauris est, fermentum sed blandit ac, dapibus sit amet mi. Donec placerat congue vulputate.",
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
          if( item.Playlist != null) {
            return(
              <Denuncia Id={item.Id} Receita={item.Receita} Razao={item.Razao} Tipo="Playlist" Denuncia={item.Playlist}/>
              )
          }else{
            return(
              <Denuncia Id={item.Id} Receita={item.Receita} Razao={item.Razao} Tipo="Comentário" Denuncia={item.Comentario}/>
              )
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
        <Header as="h1" style={{color:"white", marginTop:"3.5vh"}}>Denúncias pendentes</Header>
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
