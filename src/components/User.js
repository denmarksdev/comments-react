import React from 'react'

import {
    FormGroup,
    FormLabel,
    Button
  } from 'react-bootstrap';

const formStyle = {
    display:'flex',
    justifyContent:'flex-end',
    alignItems:'center',
}

const buttonStyle = {
    marginLeft:25
}

const User = ({ email, logout }) => {
    return (
        <FormGroup  style={formStyle}>
            <FormLabel> Usuario logado como: <strong>{ email }</strong></FormLabel>
            <Button variant='danger' style={buttonStyle}  onClick={logout}>Sair</Button>
            
        </FormGroup>
    )
}
export default User