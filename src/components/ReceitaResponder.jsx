import React, { useEffect, useState } from 'react';
import {Card,Button,Icon,Form,Image,Segment,List,Modal,Header,Input,Dropdown,Select, Grid,Confirm} from 'semantic-ui-react';
import logo from '../logo3.png';
import Receita from './Receita';
import axios from 'axios'
import Rota from '../services/Rota';

export default (props)=> {

    const [confirmar, setConfirmar] = useState("");
    const [opcoes, setOpcoes] = useState()
    const [show, setShow] = useState(true)
    const [abrir, setAbrir] = useState(false)
    const [data, setData] = useState([]);
    const [ingrediente, setIngrediente] = useState([])
    let [quantidade, setQuantidade] = useState([])
    let [medida, setMedida] = useState([])
    let [mandar, setMandar] = useState([])
    var coisa = props.Ingredientes
    let i = 0
    var AjustarReceita; var PegarIngredientes = [];
    let a = ""
    useEffect(() => {
        coisa.map(item => {
            setData(prev => {
                prev.push({
                    Id: 0,
                    Description: "",
                    Name: '',
                    Amount: '',
                    Measeure: ''
                })
                return prev
            })
        })
    },[])

    const Medidas = [
        {
            text: "mg de",
            value: "mg de"
        },
        {
            text: "g de",
            value: "g de"
        },
        {
            text: "kg de",
            value: "kg de"
        },
        {
            text: "ml de",
            value: "ml de"
        },
        {
            text: "l de",
            value: "l de"
        },
        {
            text: "xícara(s) de chá de",
            value: "xícara(s) de chá de "
        },
        {
            text: "xícara(s) de ",
            value: "xícara(s) de "
        },
        {
            text: "colher(es) de chá de",
            value: "colher(es) de chá de"
        },
        {
            text: "colher(es) de sopa de",
            value: "colher(es) de sopa de"
        },
        {
            text: "Lata(s) de",
            value: "Lata(s) de"
        },
    ]

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
                onConfirm={()=> {MandarBanco(props.Id,props.Autor, data);setConfirmar("");setShow(false)}}
                content={data.content}
                header={data.header}
                cancelButton="Cancelar"
                confirmButton="Sim"
            />
        )
    }

    function MandarBanco(id, autor) {

        data.map(item=>{
            console.log(item.Name)
            console.log(item.Measeure)
            console.log(item.Amount)
            setMandar(mandar.concat({
                Name: item.Name,
                Measeure: item.Measeure,
                Amount: item.Amount,
                Id: null,
                Description: null
            }))

        })

        if(confirmar == "Confirmar"){

            console.log(mandar)

            axios({
                method: "POST",
                baseURL: Rota + "api/recipe/" + id + "/" + autor + "/approve",
                headers: {
                    'token': localStorage.getItem("token"),
                },
                data: {
                    'igredients': mandar
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
                baseURL: Rota + "api/recipe/" + id + "/" + autor + "/decline",
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
   
    function handleChangeIngridente(event, index){
        console.log(data)
        setData(prev => {
            prev[index].Name = event.target.outerText
            return prev
        })
    }

    function handleChange(event, index){
        console.log(data)
        setData(prev => {
            prev[index].Amount = event.target.value

            return prev
        })
    }

    function handleChangeMedi(event, index){
        setData(prev => {
            prev[index].Measeure = event.target.outerText
            return prev
        })
    }

    function SetarIngredientes(){

        setAbrir(false)
    }

    return(
        (show)?(
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
                        {ingrediente}
                        {quantidade}
                        {medida}
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
                            item = item.split("*")
                            item = item.slice(1, item.length - 1)
                            AjustarReceita = item[0];
                            item[0] = item[1].replace(/[,]/g, "");
                            item[1] = item[2];
                            item[2] = AjustarReceita;
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
                        <Grid columns={3}>
                            <Grid.Row>
                            <Grid.Column>
                                Nome dos Ingredientes: <br />
                                {opcoes?
                                (
                                    opcoes.map(item=>{
                                        PegarIngredientes[i] = {
                                            "key": item.Name,
                                            "text": item.Name,
                                            "value": item.Name,
                                            
                                            
                                        }
                                        i++;
                                    })
                                )
                                :(null)
                                }
                                
                                {
                                data.map((item, index)=>{
                                    if(data[index].Name == ''){
                                        return (
                                            <Dropdown onChange={(event) => handleChangeIngridente(event, index)} value={ingrediente[index]} selection search fluid options={PegarIngredientes}   style={{marginTop:"2.5%"}} />
                                        )
                                    }
                                    else{
                                        return (
                                            <Dropdown onChange={(event) => handleChangeIngridente(event, index)} value={data[index].Name} selection search fluid options={PegarIngredientes}   style={{marginTop:"2.5%"}} />
                                        )
                                    }
                                })}
                            </Grid.Column>
                            <Grid.Column>
                                Quantidade
                                {
                                data.map((item, index)=>{
                                    if(data[index].Amount == ''){
                                        return (
                                            <Input value={quantidade[index]} onChange={(event) => handleChange(event,index)} fluid style={{marginTop:"2.5%"}}  />
                                        )
                                    }else{
                                        return (
                                            <Input value={item.Amount} onChange={(event) => handleChange(event,index)} fluid style={{marginTop:"2.5%"}}  />
                                        )
                                    }
                                })}
                            </Grid.Column>

                            <Grid.Column>
                                Medidas:
                                {data.map((item, index)=>{
                                    if(data[index].Measeure == ''){
                                        return (
                                            <Dropdown value={medida[index]} onChange={(event) => handleChangeMedi(event, index)} selection options={Medidas} fluid style={{marginTop:"2.5%"}}  />
                                        )
                                    }else {
                                        return (
                                            <Dropdown value={item.Measeure} onChange={(event) => handleChangeMedi(event, index)} selection options={Medidas} fluid style={{marginTop:"2.5%"}}  />
                                        )
                                    }
                                })}
                            </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        </Segment>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions style={{backgroundColor:"#e24333",color:"white",textAlign:"center"}}>
                        <Button
                        content="Salvar Ingredientes"
                        labelPosition='right'
                        icon='checkmark'
                        onClick={() => SetarIngredientes()}
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
                <Card.Content>
                    <Button floated='right' color="red" style={{marginTop:"10px",width:"30%"}} onClick={()=>{setConfirmar("Reprovar")}}>Reprovar</Button>
                    <Button floated='right' color="green" style={{marginTop:"10px",width:"30%"}} onClick={()=>{setConfirmar("Confirmar")}}>Aprovar</Button>
                </Card.Content>
            </Card>

            {ConfirmarHandler()}
        </>)
        :
        null
    )
}