import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button, CardContent,Icon} from 'semantic-ui-react';

export default (props)=> {
    return(
        <>
            <Card style={{width:"100%"}}>
                <Card.Content style={{ backgroundColor:"#e24333"}}>
                    <Card.Header style={{color:'white'}}>
                        <Icon name='angle left' style={{marginTop:'12px'}}/>
                        Voltar
                        <Button style={{ border: "1px solid black", backgroundColor: "#ba1b1d", color: "white"}} floated='right'size='tiny' >Rejeitar denúncia</Button>
                        <Button style={{ border: "1px solid black"}} floated='right'size='tiny' color="green">Aceitar denúncia</Button>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <h1>Comentário da Receita - Coisa Dinamica</h1>
                    <p>Razão de denúncia: Coisa dinamica</p>
                    <h1>Comentário denunciado:</h1>
                    <p>"Coisa dinamica"</p>
                </Card.Content>
            </Card>
        </>
    )
}