import '../pages/paginaprincipal.css';
import React, { useEffect, useState } from 'react';
import {Card,Button,Confirm} from 'semantic-ui-react';
import { data } from 'jquery';
import axios from 'axios';
import Rota from '../services/Rota';

export default (props)=> {
    
    const [show,setShow] = useState(true);
    const [confirm,setConfirm] = useState("");

    function MandarBanco(id, destino) {
        if(confirm == "approve"){

            axios({
                method: "PUT",
                baseURL: Rota + "api/complaint/approve/" + id,
                headers: {
                    'token': localStorage.getItem("token"),
                },
                data: {
                    'sender': destino
                }
            })
            .then(response=>{
                console.log(response);
                console.log(destino);
            })
            .catch(err=>{
                console.log(err);
            })
        }
        else{
            axios({
                method: "PUT",
                baseURL: Rota + "api/complaint/decline/" + id,
                headers: {
                    'token': localStorage.getItem("token"),
                },
                data: {
                    'sender': destino
                }
            })
            .then(response=>{
                console.log(response);
                console.log(destino);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }

    function ConfirmHandler() {
        
     let data = {content:"",header:""}

    if(confirm == "approve"){
        data = {
            content: "Você tem certeza que quer aprovar essa denúncia? Essa ação não poderá ser desfeita posteriormente",
            header: "Aprovar denúncia" 
        }
    }
    else {
        data = {
            content: "Você tem certeza que quer rejeitar essa denúncia? Essa ação não poderá ser desfeita posteriormente",
            header: "Rejeitar denúncia" 
        }
    }
    
        return(
            <Confirm
                open={confirm!=""}
                onCancel={()=>{setConfirm("")}}
                onConfirm={()=>{MandarBanco(props.Id, props.Denunciado);setConfirm("");setShow(false);}}
                content={data.content}
                header={data.header}
                cancelButton="Cancelar"
                confirmButton="Sim"
            />
        )
    }
    useEffect(()=>{
        return ()=>{
        }
    })

    return(
        (show)?
        (
        <>
            <Card key={props.Id} style={{width:"100%"}}>
                <Card.Content >
                    <Card.Meta>Remetente: {props.Autor}</Card.Meta>
                    <Card.Meta>Razão de denúncia: {props.Razao}</Card.Meta>
                    <Card.Description>
                        E-mail do denunciado: {props.Denunciado}
                    </Card.Description>
                    <br />
                    <p> Denunciado: {props.Conteudo}</p>
                </Card.Content>
                <Card.Content>
                    <Button.Group size='medium' floated='right'>
                     <Button  color="green"  onClick={()=>{setConfirm("approve")}}>Aprovar</Button>
                     <Button  color="red" onClick={()=>{setConfirm("decline")}}>Reprovar</Button> 
                    </Button.Group>
                </Card.Content>
            </Card>

            {ConfirmHandler()}

        </>)
        :
        null
 )
}