import '../pages/paginaprincipal.css';
import React, { useState } from 'react';
import {Dimmer,Segment,Button,Icon,Header,Grid,Modal} from 'semantic-ui-react';
import {data} from 'jquery'
import axios from 'axios';

export default (props)=> {

    const [abrir, setAbrir] = useState(false)
    const [Clicar, setClicar] = useState(true)
    Clicar = props.Tabela
    console.log("bruh")
    console.log(Clicar)

    return (
        <Modal
          onClose={() => setAbrir(false)}
          onOpen={() => setAbrir(true)}
          open={abrir}
          trigger={ Clicar == true }
        >
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content image>
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>
                We've found the following gravatar image associated with your e-mail
                address.
              </p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={() => setAbrir(false)}>
              Nope
            </Button>
            <Button
              content="Yep, that's me"
              labelPosition='right'
              icon='checkmark'
              onClick={() => setAbrir(false)}
              positive
            />
          </Modal.Actions>
        </Modal>
      )
}