import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button, CardContent} from 'semantic-ui-react';

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
                    <Card.Meta>Respondido: 17/08/2021 ás 17:10</Card.Meta>
                    <Card.Content>
                        Status: <span style={{color:'green'}}>Aprovada</span>
                    </Card.Content>
                </Card.Content>
                <CardContent>
                    <Button basic color="blue" fluid>
                        visualizar
                    </Button>
                </CardContent>
            </Card>
        </>
    )
}