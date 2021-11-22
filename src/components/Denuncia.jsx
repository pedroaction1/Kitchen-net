import '../pages/paginaprincipal.css';
import React, { useEffect, useState } from 'react';
import {Card,Button,Confirm} from 'semantic-ui-react';
import { data } from 'jquery';

export default (props)=> {
    
    const [show,setShow] = useState(true);
    const [confirm,setConfirm] = useState("");

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
                onConfirm={()=>{setConfirm("");setShow(false);}}
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
            <Card style={{width:"100%"}}>
                <Card.Content key={props.Id}>
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