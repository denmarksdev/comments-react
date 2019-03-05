import React from 'react'

import {
    Modal,
    Button,
} from 'react-bootstrap';

const titleStyle = {
    color: 'red'
}

const errorMessages = {
    'auth/user-not-found': 'Email ou senha inválidos.',
    'auth/invalid-email': 'Email inválido.',
    'auth/wrong-password': 'Senha inválida.',
    'auth/weak-password': 'A senha deve ter ao menos 6 caracteres.',
    'auth/email-already-in-use' : 'Este email já está em uso.'
}

const Dialog = ({ show, msgErro, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title style={titleStyle}>Erro</Modal.Title>
            </Modal.Header>
            <Modal.Body>{errorMessages[msgErro]}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
        </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Dialog