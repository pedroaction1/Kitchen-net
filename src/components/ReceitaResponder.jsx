import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";
import {Card,Button,Icon,TextArea,Form,Input} from 'semantic-ui-react';

export default (props)=> {
    return(
        <>
            <Card style={{width:"100%"}}>
                <Card.Content style={{ backgroundColor:"#e24333"}}>
                    <Card.Header style={{color:'white'}}>
                        <Icon name='angle left' style={{marginTop:'12px'}}/>
                        Voltar
                        <Button style={{ border: "1px solid black"}} floated='right'size='tiny' color="green">Aprovar</Button>
                        <Button style={{ border: "1px solid black"}} floated='right'size='tiny' color="red">Reprovar</Button>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Form>
                        <strong>Título:</strong>
                    <TextArea size='medium' style={{ minHeight: 45, maxHeight: 45}} />
                    <strong>Autor:</strong> é dinamico <br />
                    <strong>Sobre:</strong> <TextareaAutosize minRows={1} maxRows={2}/>
                    Data: <Input type='date' placeholder='Data...'/>
                    Porções: <Input type='number' size='small' />
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