import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Dimmer,Segment,Button,Icon,Header,Grid} from 'semantic-ui-react';
import {data} from 'jquery'
import axios from 'axios';

export default (props)=> {

    const [active, setActive] = useState(false)

    async function handleClose(){
        await setActive(!active)
    }

    return (
      <div>
        <Dimmer as='Segment' active={props.active} page>
            <Grid>
                <Grid.Column width={100}>
                    <Segment style={{backgroundColor: "#e24333"}}>
                        <Segment>
                            <Button onclick={handleClose()}/>
                        </Segment>
                    </Segment>
                </Grid.Column>
            </Grid>  
        </Dimmer>
      </div>
    )
}