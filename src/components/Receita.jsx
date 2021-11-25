import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Image,Confirm, Segment} from 'semantic-ui-react';
import {data} from 'jquery'
import ReceitaResponder from './ReceitaResponder';
import axios from 'axios';
import Rota from '../services/Rota';

export default (props)=> {

    const [show,setShow] = useState(true);
    const [confirmar, setConfirmar] = useState("");
    const [receita, setReceita] = useState(false);
    const [vendo, setVendo] = useState(false);
    const [conteudo, setConteudo] = useState();

    function MandarBanco(id, autor) {
        if(confirmar == "Confirmar"){

            axios({
                method: "POST",
                baseURL: Rota + "api/recipe/" + id + "/" + autor + "/approve",
                headers: {
                    'token': localStorage.getItem("token"),
                },
                data: {
                    'igredients': ""
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
                method: "POST",
                baseURL: "https://e067-2804-18-8c1-877e-d0c2-a42d-cdd2-a916.ngrok.io/api/recipe/" + id + "/" + autor + "/decline",
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
                <ReceitaResponder Titulo={props.Titulo} Autor={props.Autor} 
                Sobre={props.Sobre} porcoes={props.Porcao} Ingredientes={props.Ingredientes} />
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
                    <Button  color="red" style={{marginTop:"10px",width:"30%"}} onClick={()=>{setConfirmar("Reprovar")}}>Reprovar</Button>
                    <Button  color="green" style={{marginTop:"10px",width:"30%"}} onClick={()=>{setConfirmar("Confirmar")}}>Aprovar</Button>
                </Card.Content>
            </Card>

            <div style={{display: "none"}}>{props.Sobre} {props.Autor} {props.Porcao} {props.Ingredientes} {props.Image} {conteudo} </div>
            {ConfirmarHandler()}
            {GetRecipeBig()}
        </>)
        :
        null
    )
}