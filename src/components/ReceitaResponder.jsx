import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Icon,Form,Image,Segment,List,Modal,Header} from 'semantic-ui-react';
import logo from '../logo3.png';
import Receita from './Receita';

export default (props)=> {

    const [show, setShow] = useState(true);
    const [tabela, setTabela] = useState(false);
    const [abrir, setAbrir] = useState(false)
    var coisa = props.Ingredientes
    var temp;

    return(
        (show)?
        (
        <>
            <Card style={{width:"100%",fontSize:"15px"}}>
                <Card.Content style={{ backgroundColor:"#e24333"}}>
                    <Card.Header textAlign="center" style={{color:'white'}}>
                        Receita: {props.Titulo}
                    </Card.Header>
                </Card.Content>
                <Card.Content>
                    <Form>
                        <strong>Título:</strong> {props.Titulo} <br />
                        <strong>Autor:</strong> {props.Autor} <br />
                        <strong>Sobre:</strong> {props.Sobre} <br />
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
                    <strong>Ingredientes:</strong>
                    <List bulleted>
                        {coisa = coisa.split("|"), coisa = coisa.slice(1, coisa.length - 1), coisa.map(item=>{
                            item = item.split(",")
                            temp = item[0];
                            item[0] = item[1];
                            item[1] = item[2];
                            item[2] = temp;
                            return (
                                <List.Item> {item[0] + item[1] + " " + item[2]} </List.Item>
                            )
                        })}
                    </List>
                    <br />
                    <br />
                    <Modal
                    onClose={() => setAbrir(false)}
                    onOpen={() => setAbrir(true)}
                    open={abrir}
                    trigger={<Button fluid onClick={()=>{setTabela(!tabela)}} style={{ backgroundColor: "#e24333", color: "white"}}>Editar Ingrediente</Button> }
                    >
                    <Modal.Header textAlign="center">Ingredientes</Modal.Header>
                    <Modal.Content image>
                        <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>
                            We've found the following gravatar image associated with your e-mail
                            address.
                        </p>
                        <p>Is it okay to use this photo?</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => setAbrir(false)}>
                        Nope
                        </Button>
                        <Button
                        content="Yep, that's me"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => setAbrir(false)}
                        positive
                        />
                    </Modal.Actions>
                    </Modal>
                    <strong>Etapas:</strong>
                    <Card fluid style={{ backgroundColor: "#e24333"}}>
                        <Card.Content>
                            <Card.Header style={{ color: "white"}}>1 <Image size='tiny' src={logo}/> Passo número 1</Card.Header>
                        </Card.Content>
                    </Card>
                </Card.Content>
            </Card>
        </>)
        :
        null
    )
}