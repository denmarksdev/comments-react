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
const buttonStyle  ={
    marginRight:10
}

export default class Login extends React.Component {

    state = {
        email: '',
        passwd: ''
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value
        })
    }

    login = (event) => {
        event.preventDefault()
        const { email, passwd } = this.state
        this.props.login(email, passwd)
    }

    render() {
        return (
            <Container style={loginStyle} >
                <h2>Login</h2>
                <Form method='POST' onSubmit={this.login} >
                    <FormGroup>
                        <FormLabel>Usuário</FormLabel>
                        <FormControl onChange={this.handleChange('email')} />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Senha</FormLabel>
                        <FormControl onChange={this.handleChange('passwd')} type='password' />
                    </FormGroup>
                    <FormGroup>
                        <Button type='submit' style={ buttonStyle }  >Entrar</Button>
                        <Button variant='success' onClick={() => this.props.changeScreen('signup')} >Criar conta</Button>
                    </FormGroup>
                </Form>
            </Container>
        )
    }

}