import React from 'react';

import { ListGroupItem } from 'react-bootstrap';

export const CommentItem = ({ item }) => {
    let comment = 'Vazio'
    let email

    if (item.comment) {
        comment = item.comment
    }
    if (item.email) {
        email = item.email
    }

    return (
        <ListGroupItem>
            {comment}
            {
                email &&
                <p>Enviado por <strong>{email}</strong></p>
            }
        </ListGroupItem>
    )
}