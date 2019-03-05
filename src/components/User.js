import React from 'react'

import {
    FormGroup,
    FormLabel,
    Button
  } from 'react-bootstrap';

const formStyle = {
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
}

const User = ({ email, logout }) => {
    return (
        <FormGroup  style={formStyle}>
            <FormLabel> Usuario logado como: <strong>{ email }</strong></FormLabel>
            <Button variant='danger' onClick={logout}>Sair</Button>
            
        </FormGroup>
    )
}
export default User