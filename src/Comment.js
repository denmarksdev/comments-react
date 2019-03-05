import React from 'react';

import {
    Row,
    Col,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    Button
} from 'react-bootstrap';

const buttonStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '15px'
}

export default class Comment extends React.Component {

    state = {
        newComment: '',
        isLoading: false
    }

    onEnviar = (event) => {
        event.preventDefault()
        const comentario = event.target.elements['comentario'].value;
        this.props.sendNewComment(comentario)
        this.setState({ newComment: '' })
    }

    render() {
        return (
            <div>
                <h2>Novo comentário</h2>
                <Form method='POST' onSubmit={this.onEnviar} >
                    <Row>
                        <Col xs={10} >
                            <FormGroup>
                                <FormLabel>Comentário</FormLabel>
                                <FormControl
                                    name='comentario'
                                    type='textarea'
                                    value={this.state.newComment}
                                    onChange={(evento) => this.setState({ newComment: evento.target.value })}
                                />
                            </FormGroup>
                        </Col>
                        <Col xs={2} style={buttonStyle}>
                            <Button type='submit' >Enviar</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}