import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Image,Confirm, Segment} from 'semantic-ui-react';
import {data} from 'jquery'
import ReceitaResponder from './ReceitaResponder';
import axios from 'axios';
import Rota from '../services/Rota';

export default (props)=> {

    const [show,setShow] = useState(true);
    const [receita, setReceita] = useState(false);
    const [vendo, setVendo] = useState(false);
    const [etapas, setEtapas] = useState()

    function GetRecipeBig(){

        if( receita == true ){
            return(
                <ReceitaResponder Titulo={props.Titulo} Autor={props.Autor} Id={props.Id}
                Sobre={props.Sobre} porcoes={props.Porcao} Ingredientes={props.Ingredientes} Steps={props.Steps} />
            )
        }
    }

    return(
        (show)?
        (
        <>
            <Card key={props.Id} style={{width:"100%"}}>
                <Card.Content>
                    <Image
                        floated='left'
                        size='small'
                        src= {props.Imagem}
                    />
                    <Card.Header textAlign="center" style={{marginTop:"45px"}}> {props.Titulo}</Card.Header>
                </Card.Content>
                <Card.Content>
                    {(vendo)?
                    (
                        <Button basic color="blue" fluid onClick={()=> {{setReceita(!receita); setVendo(!vendo)} {GetRecipeBig()}} }>Minimizar</Button>

                    )
                    :
                        <Button basic color="blue" fluid onClick={()=> {{setReceita(!receita); setVendo(!vendo)} {GetRecipeBig()}} }>Expandir</Button>
                    }

                </Card.Content>
            </Card>

            <div style={{display: "none"}}>{props.Sobre} {props.Id} {props.Autor} {props.Porcao} {props.Ingredientes} {props.Image} </div>
            {GetRecipeBig()}
        </>)
        :
        null
    )
}