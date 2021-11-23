import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Image,Confirm} from 'semantic-ui-react';
import {data} from 'jquery'
import ReceitaResponder from './ReceitaResponder';
import axios from 'axios';

export default (props)=> {

    const [show,setShow] = useState(true);
    const [confirmar, setConfirmar] = useState("");
    const [receita, setReceita] = useState(false);
    const [vendo, setVendo] = useState(false);

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
                onConfirm={()=> {MandarBanco(props.Id, props.Autor);setConfirmar("");setShow(false)}}
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
                <ReceitaResponder Titulo={props.Titulo} Autor={props.Autor} Sobre={props.Sobre} porcoes={props.Porcao}  />
            )
        }
    }

    return(
        (show)?
        (
        <>
            <Card key={props.Id} style={{width:"100%"}}>
                <Card.Content>
                    <Image
                        floated='left'
                        size='small'
                        src= {props.Imagem}
                    />
                    <Card.Header textAlign="center" style={{marginTop:"45px"}}> {props.Titulo}</Card.Header>
                </Card.Content>
                <Card.Content>
                    {(vendo)?
                    (
                        <Button basic color="blue" fluid onClick={()=> {{setReceita(!receita); setVendo(!vendo)} {GetRecipeBig()}} }>Minimizar</Button>

                    )
                    :
                        <Button basic color="blue" fluid onClick={()=> {{setReceita(!receita); setVendo(!vendo)} {GetRecipeBig()}} }>Expandir</Button>
                    }
                  <Button.Group size ='small' floated='right' style={{marginTop:"10px"}}> 
                    <Button  color="green" onClick={()=>{setConfirmar("Confirmar")}}>Aprovar</Button>
                    <Button  color="red" onClick={()=>{setConfirmar("Reprovar")}}>Reprovar</Button>
                  </Button.Group> 
                </Card.Content>
            </Card>

            <div style={{display: "none"}}>{props.Sobre} {props.Autor} {props.Porcao} {props.Ingredientes} </div>
            {ConfirmarHandler()}
            {GetRecipeBig()}
        </>)
        :
        null
    )
}