import * as firebase from 'firebase'
import 'firebase/database';
import 'firebase/auth'

const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
};

let databaseValue
let authValue

try {
    var configurado = firebase.initializeApp(config)
    databaseValue = configurado.database()
    authValue = configurado.auth()
} catch (error) {
    console.log(error)
}

export const database = databaseValue
export const auth =  authValue


