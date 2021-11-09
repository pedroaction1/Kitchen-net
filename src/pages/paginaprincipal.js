import logo from '../logo3.png';
import './paginaprincipal.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../logo3.png';
import './paginaprincipal.css';

import { Grid, Segment, Header, List, Icon, GridColumn,Menu, Label} from 'semantic-ui-react';

export default (props)=> {

  const handleLogout = () => {
    props.history.push('/App');
  }
  const [active,setActive] = useState("pendentes");
  return (
    
    <>
    <Segment style={{backgroundColor:"#e24333",display:"flex",alignItems:"center"}} className="Navbar">
      <div style={{display:"flex"}}>
          <img src={logo} className="LogoP" />
        <Header as="h1" style={{color:"white", marginTop:"25px"}}>Receitas pendentes</Header>
      </div>

      <div style={{display:"flex",alignItems:"center",flexDirection:"column",marginLeft:"auto",marginRight:"5%"}}>
        <Header as="h4" style={{color:"white"}}>logado como: Sergio oliveira da silva carlos</Header>
        <div className="NavLinks">
            <Link to="#" style={{color:"white",marginLeft:"20px"}}>
              Altera senha
            </Link>       
            <Link style={{color:"white",marginLeft:"20px"}}>
              Sair
            </Link>   
        </div>
      </div>
    </Segment>    

    <Grid>
      <Grid.Column width={2}>
        <Menu fluid vertical>
          <Menu.Item name="pendentes">
            <Label color="red">4</Label>
            Pendentes
          </Menu.Item>
          <Menu.Item name="respondidas">
            respondidas
          </Menu.Item>
        </Menu>
      </Grid.Column>
      <GridColumn width={16}></GridColumn>
    </Grid>

    </>
  );
}
