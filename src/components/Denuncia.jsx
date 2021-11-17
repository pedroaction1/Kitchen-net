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
        console.log(2)
        return props.OnChange
    })
    return(
        (show)?
        (
        <>
            <Card style={{width:"100%"}}>
                <Card.Content>
                    <Card.Header>Comentario da receita: {props.Receita}</Card.Header>
                    <Card.Meta>Razão de denúncia: {props.razao}</Card.Meta>
                    <Card.Description>
                        Comentario denunciado: {props.Comentario}
                    </Card.Description>
                    <Card.Meta>
                        Comentario denunciado em: {props.Data}
                    </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button.Group fluid style={{marginTop:"10px"}}> 
                    <Button basic color="green" onClick={()=>{setConfirm("approve")}}>Aprovar</Button>
                    <Button basic color="red" onClick={()=>{setConfirm("decline")}}>Reprovar</Button>
                  </Button.Group> 
                </Card.Content>
            </Card>

            {ConfirmHandler()}

        </>)
        :
        null
 )
}