import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Image,Confirm} from 'semantic-ui-react';
import {data} from 'jquery'

export default (props)=> {

    const [show,setShow] = useState(true);
    const [confirmar, setConfirmar] = useState("");

    function ConfirmarHandler(){
        let data = {content: "", header: ""}

        if(confirmar == "Confirmar"){
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
                onConfirm={()=> {setConfirmar("");setShow(false)}}
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
            <Card style={{width:"100%"}}>
                <Card.Content>
                    <Image
                        floated='left'
                        size='small'
                        src= {props.Imagem}
                    />
                    <Card.Header textAlign="center" style={{marginTop:"45px"}}> {props.Titulo}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Button basic color="blue" fluid>Visualizar</Button>
                  <Button.Group fluid style={{marginTop:"10px"}}> 
                    <Button basic color="green" onClick={()=>{setConfirmar("Confirmar")}}>Aprovar</Button>
                    <Button basic color="red" onClick={()=>{setConfirmar("Reprovar")}}>Reprovar</Button>
                  </Button.Group> 
                </Card.Content>
            </Card>

            {ConfirmarHandler()}
        </>)
        :
        null
    )
}