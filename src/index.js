import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { database, auth  } from './firebase';

ReactDOM.render(
    <App database={database} auth={auth} />, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();