import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";
import {Card,Button,Icon,TextArea,Form,Input,Image,Segment, List} from 'semantic-ui-react';
import logo from '../logo3.png'

export default (props)=> {

    const [show, setShow] = useState(true);
    const [confirmar, setConfirmar] = useState("");
    const [receita, setReceita] = useState(false);

    return(
        (show)?
        (
        <>
            <Card style={{width:"100%"}}>
                <Card.Content style={{ backgroundColor:"#e24333"}}>
                    <Card.Header style={{color:'white'}}>
                        <Icon name='angle left' style={{marginTop:'12px'}}/>
                        Voltar
                        <Button style={{ border: "1px solid black", backgroundColor: "#ba1b1d", color: "white"}} floated='right'size='tiny' >Reprovar</Button>
                        <Button style={{ border: "1px solid black"}} floated='right'size='tiny' color="green">Aprovar</Button>
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Form>
                        <strong>Título:</strong> {props.Titulo} <br />
                        <strong>Autor:</strong> {props.Autor} <br />
                        <strong>Sobre:</strong> {props.Sobre} <br />
                        <strong>Data:</strong> <Input type='date' placeholder='Data...' defaultValue={props.data}/>
                        <strong>Porções:</strong> {props.porcoes} <br />
                    </Form>
                    <strong>Mídia Principal:</strong><br />
                    <Segment basic fluid textAlign='center'>
                        <Image
                            size='small'    
                            src={props.Image}
                        />
                    </Segment>
                    <br />
                    <strong>Ingredientes:</strong> é dinamico
                    <List bulleted>
                        <List.Item><strong>2 fatias de Pão</strong></List.Item>
                    </List>
                    <br />
                    <br />
                    <Button fluid style={{ backgroundColor: "#e24333", color: "white"}}>Editar Ingrediente</Button>
                    <strong>Etapas:</strong> é dinamico
                    <Card fluid style={{ backgroundColor: "#e24333"}}>
                        <Card.Content>
                            <Card.Header style={{ color: "white"}}>1 <Image size='tiny' src={logo}/> Passo número 1</Card.Header>
                        </Card.Content>
                        <Card.Content>  
                             <Card.Header style={{color: "white"}} textAlign="center">Adicionar Etapa <Icon name="plus"/></Card.Header>
                        </Card.Content>
                    </Card>
                </Card.Content>
            </Card>
        </>)
        :
        null
    )
}