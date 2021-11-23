import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Image,Confirm} from 'semantic-ui-react';
import {data} from 'jquery'
import ReceitaResponder from './ReceitaResponder';

export default (props)=> {

    const [show,setShow] = useState(true);
    const [confirmar, setConfirmar] = useState("");
    const [receita, setReceita] = useState(false);
    const [vendo, setVendo] = useState(false);
    var View;

    if(!vendo){
        console.log(vendo);
    }

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

    function GetRecipeBig(){

        if( receita == true ){
            return(
                <ReceitaResponder Titulo={props.Titulo} Autor={props.Autor} Sobre={props.Sobre} porcoes={props.Porcao} />
            )
        }
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
                    <Button basic color="blue" fluid onClick={()=> {{setReceita(!receita);setVendo(!vendo)} {GetRecipeBig()}} }> {View} </Button>
                  <Button.Group size ='small' floated='right' style={{marginTop:"10px"}}> 
                    <Button  color="green" onClick={()=>{setConfirmar("Confirmar")}}>Aprovar</Button>
                    <Button  color="red" onClick={()=>{setConfirmar("Reprovar")}}>Reprovar</Button>
                  </Button.Group> 
                </Card.Content>
            </Card>

            <div style={{display: "none"}}>{props.Sobre} {props.Autor} {props.Porcao}  </div>
            {ConfirmarHandler()}
            {GetRecipeBig()}
        </>)
        :
        null
    )
}