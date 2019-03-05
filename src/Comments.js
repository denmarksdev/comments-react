import React from 'react';
import { CommentItem } from './CommentItem'
import { ListGroup } from 'react-bootstrap';

const Comments = ({ comments }) => {
    const keys = Object.keys(comments)
    return (
        <div>
            <h2>Comentários</h2>
            <ListGroup>
                {
                    keys.map(key => <CommentItem key={key} item={comments[key]} />)
                }
            </ListGroup>
        </div>
    )
}

export default Comments