import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button} from 'semantic-ui-react';

export default (props)=> {
    return(
        <>
            <Card style={{width:"100%"}}>
                <Card.Content>
                    <Card.Header>Comentario da receita: Batatinha frita crocante</Card.Header>
                    <Card.Meta>Razão de denúncia: Desconforto</Card.Meta>
                    <Card.Description>
                        Comentario denunciado: KKKKKKKKKKKK, parece meu p#@#
                    </Card.Description>
                </Card.Content>
                <Card.Content>
                    <Button basic color="blue" fluid>Visualizar</Button>
                  <Button.Group fluid style={{marginTop:"10px"}}> 
                    <Button basic color="green">Aprovar</Button>
                    <Button basic color="red">Reprovar</Button>
                  </Button.Group> 
                </Card.Content>
            </Card>
        </>
    )
}