import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button, CardContent,Icon} from 'semantic-ui-react';

export default (props)=> {
    return(
        <>
            <Card style={{width:"100%"}}>
                <Card.Content style={{ backgroundColor:"#ff6859"}}>
                    <Card.Header style={{color:'white'}}>
                        <Button style={{marginBottom:'12px'}} color="blue">
                        <Icon name='angle left' />
                            Voltar
                        </Button>
                       <Button.Group floated='right' fluid> 
                            <Button color="red" >Rejeitar denúncia</Button>
                            <Button color="green" >Aceitar denúncia</Button>
                       </Button.Group>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <h3>Comentário da Receita - Batata Frita Crocante</h3>
                    <p>Razão de denúncia: Desconforto</p>
                    <h3>Comentário denunciado:</h3>
                    <p>"Coisa dinamica"</p>
                </Card.Content>
            </Card>
        </>
    )
}