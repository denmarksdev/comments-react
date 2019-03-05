import React from 'react';
import { CommentItem } from './CommentItem'
import { ListGroup } from 'react-bootstrap';

const Comments = ({ comments }) => {

    if (comments === null)
        return <div>
            <h2>Sem Comentários</h2>
        </div>

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