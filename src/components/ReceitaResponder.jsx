import React, { useState } from 'react';
import {Card,Button,Icon,Form,Image,Segment,List,Modal,Header,Input,Dropdown, Grid} from 'semantic-ui-react';
import logo from '../logo3.png';
import Receita from './Receita';
import axios from 'axios'
import Rota from '../services/Rota';

export default (props)=> {

    const [opcoes, setOpcoes] = useState()
    const IngredientesOpcoes = opcoes
    const [show, setShow] = useState(true)
    const [abrir, setAbrir] = useState(false)
    var coisa = props.Ingredientes
    var temp

    function PuxarIngredientes(){
        if(opcoes == null){
            axios({
                method: "POST",
                baseURL: Rota + "api/searchigredient",
                headers: {
                    'token': localStorage.getItem("token"),
                },
                data: {
                    'page':0,
                    'search': ""
                }
            })
            .then(response=>{
                setOpcoes(response.data)
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

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
                    trigger={<Button onClick={PuxarIngredientes()} fluid style={{ backgroundColor: "#e24333", color: "white"}}>Editar Ingrediente</Button> }
                    >
                    <Modal.Header  style={{backgroundColor:"#e24333",color:"white",textAlign:"center"}} textAlign="center">Ingredientes</Modal.Header>
                    <Modal.Content style={{backgroundColor:"#e24333"}} image>
                        <Modal.Description>
                        <Segment>
                        <Grid columns='equal'>
                            <Grid.Column width={8}>
                                Nome dos Ingredientes: <br />
                                {IngredientesOpcoes.map(item=>{
                                    console.log(item.Name)
                                })
                                }
                                
                                <Dropdown selection search fluid options={IngredientesOpcoes} style={{marginTop:"2.5%"}} />
                            </Grid.Column>
                                
                            <Grid.Column>
                                Quantidade
                                {coisa.map(item=>{
                                    return (
                                        <Input fluid style={{marginTop:"5%"}} content={item[2]}/>
                                    )
                                })}
                            </Grid.Column>

                            <Grid.Column>
                                Medidas:
                                {coisa.map(item=>{
                                    return (
                                        <Input fluid style={{marginTop:"5%"}} content={item[2]}/>
                                    )
                                })}
                            </Grid.Column>
                        </Grid>
                        </Segment>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions style={{backgroundColor:"#e24333",color:"white",textAlign:"center"}}>
                        <Button
                        content="Salvar Ingredientes"
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