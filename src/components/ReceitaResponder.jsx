import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Icon,TextArea} from 'semantic-ui-react';

export default (props)=> {
    return(
        <>
            <Card style={{width:"100%"}}>
                <Card.Content style={{ backgroundColor:"#e24333"}}>
                    <Card.Header>Voltar
                    <Button.Group style={{marginTop:"10px"}} > 
                    <Button color="green">Aprovar</Button>
                    <Button color="red">Reprovar</Button>
                  </Button.Group> 
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    Título: <TextArea/>
                    Autor: é dinamico
                    Sobre: coloca a textbox grande
                    Data: coloca TextboxGrande tbm
                    Porções: coloca textbox pequena
                    Mídia Principal: Vai aprender react filho
                    Ingredientes: é dinamico
                    <Button>Adicionar Ingrediente</Button>
                    Etapas: é dinamico
                    <Card fluid>
                        <Card.Header>Bruh momento</Card.Header>
                    </Card>
                    <Card fluid>
                        <Card.Header textAlign="center">Adicionar Etapa <Icon name="plus"/></Card.Header>

                    </Card>
                </Card.Content>
            </Card>
        </>
    )
}