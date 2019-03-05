import React from 'react'

import {
    Container,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Button,
} from 'react-bootstrap';

const loginStyle = {
    marginBottom: '30px'
}
const buttonStyle = {
    marginRight: 10
}
const inputEmailStyle = {
    maxWidth: '500px'
}
const inputPasswdStyle = {
    maxWidth: '300px'
}

export default class SignUp extends React.Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    createAccount = (event) => {
        event.preventDefault()
        const { email, passwd } = this.state
        this.props.createAccount(email, passwd)
    }

    render() {
        return (
            <Container style={loginStyle} >
                <h2>Criar conta</h2>
                <Form method='POST' onSubmit={this.createAccount} >

                    <FormGroup style={ inputEmailStyle }>
                        <FormLabel>Email</FormLabel>
                        <FormControl onChange={this.handleChange('email')} />
                    </FormGroup>

                    <FormGroup style={ inputPasswdStyle }>
                        <FormLabel>Senha</FormLabel>
                        <FormControl onChange={this.handleChange('passwd')} type='password' />
                    </FormGroup>

                    <FormGroup>
                        <Button type='submit' style={buttonStyle} >Cadastrar</Button>
                        <Button variant='success' onClick={() => this.props.changeScreen('login')} >Login</Button>
                    </FormGroup>

                </Form>
            </Container>
        )
    }
}