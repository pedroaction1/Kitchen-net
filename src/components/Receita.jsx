import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Card,Button,Image} from 'semantic-ui-react';

export default (props)=> {

    const [show,setShow] = useState(true);

    return(
        (show)?
        (
        <>
            <Card style={{width:"100%"}}>
                <Card.Content>
                    <Image
                        floated='left'
                        size='small'
                        src=''
                    />
                    <Card.Header textAlign="center" style={{marginTop:"45px"}}> {props.Titulo}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Button basic color="blue" fluid>Visualizar</Button>
                  <Button.Group fluid style={{marginTop:"10px"}}> 
                    <Button basic color="green">Aprovar</Button>
                    <Button basic color="red">Reprovar</Button>
                  </Button.Group> 
                </Card.Content>
            </Card>
        </>)
        :
        null
    )
}