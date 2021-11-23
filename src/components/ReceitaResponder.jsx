import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import TextareaAutosize from "react-textarea-autosize";
import {Card,Button,Icon,Form,Input,Image,Segment,List,Confirm,Dimmer} from 'semantic-ui-react';
import logo from '../logo3.png'
import Ingredientes from './Ingredientes';
import axios from 'axios'

export default (props)=> {

    const [show, setShow] = useState(true);
    const [confirmar, setConfirmar] = useState("");
    const [receita, setReceita] = useState(false);

    function ChamarTabela(){
        return(
        <Ingredientes/>
        )
    }

    function MandarBanco(id, autor) {
        if(confirmar == "approve"){

            axios({
                method: "PUT",
                baseURL: "https://e067-2804-18-8c1-877e-d0c2-a42d-cdd2-a916.ngrok.io/api/recipe/" + id + "/" + autor + "/approve",
                headers: {
                    'token': localStorage.getItem("token"),
                },
                data: {

                }
            })
            .then(response=>{
                console.log(response);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            axios({
                method: "PUT",
                baseURL: "https://e067-2804-18-8c1-877e-d0c2-a42d-cdd2-a916.ngrok.io/api/" + id + "/" + autor + "/decline",
                headers: {
                    'token': localStorage.getItem("token"),
                }
            })
            .then(response=>{
                console.log(response);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    function ConfirmarHandler(){
        let data = {content: "", header: ""}

        if(confirmar == "approve"){
            data = {
                content: "Você tem certeza que deseja aprovar esta receita?",
                header: "Confirmar Receita"
            }
        }
        else{
            data = {
                content: "Você tem certeza que deseja rejeitar essa receita?",
                header: "Rejeitar Receita"
            }
        }

        return(
            <Confirm
                open={confirmar!=""}
                onCancel={()=> setConfirmar("")}
                onConfirm={()=> {MandarBanco(props.Id, props.Autor);setConfirmar("");setShow(false)}}
                content={data.content}
                header={data.header}
                cancelButton="Cancelar"
                confirmButton="Sim"
            />
        )
    }


    return(
        (show)?
        (
        <>
        <Dimmer                                                                                                >
            <Card style={{width:"100%"}}>
                <Card.Content style={{ backgroundColor:"#e24333"}}>
                    <Card.Header style={{color:'white'}}>
                        <Icon name='angle left' style={{marginTop:'12px'}}/>
                        Voltar
                        <Button onClick={()=>{setConfirmar("decline")}} style={{ border: "1px solid black", backgroundColor: "#ba1b1d", color: "white"}} floated='right'size='tiny' >Reprovar</Button>
                        <Button  onClick={()=>{setConfirmar("approve")}} style={{ border: "1px solid black"}} floated='right'size='tiny' color="green">Aprovar</Button>
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
                    <strong>Ingredientes:</strong>
                    <List bulleted>

                    </List>
                    <br />
                    <br />
                    <Button fluid  onClick={()=>{ChamarTabela()}} style={{ backgroundColor: "#e24333", color: "white"}}>Editar Ingrediente</Button>
                    <strong>Etapas:</strong>
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
            </Dimmer>
            {ConfirmarHandler()}
        </>)
        :
        null
    )
}