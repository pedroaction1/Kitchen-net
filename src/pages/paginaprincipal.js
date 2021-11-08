import logo from '../logo3.png';
import './paginaprincipal.css';
import React from 'react';
import { Link } from 'react-router-dom'
import '../logo3.png';
import './paginaprincipal.css';

import { Grid, Segment, Header, GridColumn } from 'semantic-ui-react';

function paginaprincipal(props) {

  const handleLogout = () => {
    props.history.push('/App');
  }
  

  return (
    <>
    <Segment style={{backgroundColor:"#e24333",display:"flex",alignItems:"center"}} className="Navbar">
      <div style={{display:"flex"}}>
        <img src={logo} className="LogoP" />
        <Header as="h1" style={{color:"white",margnTop:"25px"}}>Receitas pendentes</Header>
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
      <Grid.Column>
          <Segment></Segment>
      </Grid.Column>

      <Grid.Column>
        <Grid.Row>
          <Segment>1</Segment>
        </Grid.Row>
        <Grid.Row>
          <Segment>1</Segment>
        </Grid.Row>
      </Grid.Column>
    </Grid>
    </>
  );
}

export default paginaprincipal;
