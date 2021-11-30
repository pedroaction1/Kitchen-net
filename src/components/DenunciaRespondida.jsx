import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button, CardContent} from 'semantic-ui-react';

export default (props)=> {
    {console.log(props)}
    return(
        <>        
            {/*<Card style={{width:"100%"}}>
                <Card.Content>
                    <Card.Header>Comentario da receita: {props.Receita}</Card.Header>
                    <Card.Meta>Razão de denúncia: {props.Razao}</Card.Meta>
                    <Card.Description>
                        {props.Tipo} denunciado: {props.Denuncia}
                    </Card.Description>
                    <Card.Meta>Respondido: {props.Data}</Card.Meta>
                    <Card.Content>
                        Status: <span style={{color:'green'}}>{props.Status}</span>
                    </Card.Content>
                </Card.Content>
            </Card>*/}
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
            </Card>
        </>
    )
}