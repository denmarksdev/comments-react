import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Container } from 'react-bootstrap'
import * as serviceWorker from './serviceWorker';

import { database, auth } from './firebase';

const errorStyle = {
    color:'red',
    textAlign:'center',    
    marginTop:50
}

ReactDOM.render(
    (database
        ? <App database={database} auth={auth} />
        : <Container style={ errorStyle } >
            <h1>Firebase não foi inicializado!!!</h1>
        </Container>
    ),
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
