import logo from '../logo3.png';
import './paginaprincipal.css';
import React, { useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom'
import '../logo3.png';
import './paginaprincipal.css';
import Receita from '../components/Receita';
import {Grid,Segment,Header,List,Icon,GridColumn,Menu,Label,Dimmer,Loader} from 'semantic-ui-react';
import axios from 'axios';
import Rota from '../services/Rota'

export default (props)=> {

  const [active,setActive] = useState("pendentes");
  const [receita, setReceita] = useState();
  const history = useHistory();
  
  if(localStorage.getItem("tipo") != 3){
    history.goBack();
  }


  useEffect(()=> {
    axios({
      method: "POST",
      baseURL: Rota + "api/pendingrecipes",
      data:{
        'page': 0
      },
      headers: {
        'token': localStorage.getItem("token")
      }
    })
    .then(response=>{
      setReceita(response.data);
    })
    .catch(err=>{
      console.log(err);
    })
  },[])

  return (
    
    <>
    <Segment style={{backgroundColor:"#e24333",display:"flex",alignItems:"center"}} className="Navbar">
      <div style={{display:"flex"}}>
          <img src={logo} className="LogoP" />
        <Header as="h1" style={{color:"white", marginTop:"2.5vh"}}>Receitas pendentes</Header>
      </div>

      <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"5%"}}>
        <Header as="h4" style={{color:"white"}}>Logado como: {localStorage.getItem("login")}</Header>
        <div className="NavLinks">     
            <Link to="../" style={{color:"white",marginLeft:"20px"}} >
              Sair
            </Link>   
        </div>
      </div>
    </Segment>    

    <Grid style={{}}>
      <Grid.Column width="8" style={{margin:"auto"}}>
        {receita?
        (
          receita.map(item=>{
           if (item.Author != null){return <Receita  Id={item.Id} Titulo={item.Name} Sobre={item.Description} Autor={item.Author} Porcao={item.Portions} Ingredientes={item.Dumb_igredients} Steps={item.Stepes}/>}
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
