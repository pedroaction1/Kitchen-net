import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";
import {Card,Button,Icon,TextArea,Form,Grid,Segment} from 'semantic-ui-react';

export default (props)=> {
    return(
        <>
            <Card style={{width:"100%"}}>
                <Card.Content style={{ backgroundColor:"#e24333"}}>
                    <Card.Header style={{color:'white'}}>
                        <Icon name='angle left' style={{marginTop:'12px'}}/>
                        Voltar
                        <Button.Group floated='right'> 
                        <Button color="green">Aprovar</Button>
                        <Button color="red">Reprovar</Button>
                        </Button.Group> 
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Form>
                    Título: 
                    <TextareaAutosize minRows={1} maxRows={2}/>
                    Autor: é dinamico
                    Sobre: <TextareaAutosize minRows={1} maxRows={2}/>
                    Data: coloca TextboxGrande tbm
                    Porções: coloca textbox pequena
                    </Form>
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