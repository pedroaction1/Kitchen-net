import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Dimmer,Segment,Button,Icon,Header} from 'semantic-ui-react';
import {data} from 'jquery'
import axios from 'axios';

export default (props)=> {

    
    console.log("mas que cu");

    return(
        <>
            <Segment>
                <Dimmer page>
                    <Header as='h2' icon inverted>
                        <Icon name='heart'/>
                        Dimmed Message!
                        <Dimmer.Subheader>é o sub header</Dimmer.Subheader>
                    </Header>
                </Dimmer>
            </Segment>
        </>
 )
}