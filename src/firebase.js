import * as firebase from 'firebase'
import 'firebase/database';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDrTOzoJQjfonDokHej_oKwl67-qkStkxU",
    authDomain: "comments-devreactjs-marksdev.firebaseapp.com",
    databaseURL: "https://comments-devreactjs-marksdev.firebaseio.com",
    projectId: "comments-devreactjs-marksdev",
    storageBucket: "comments-devreactjs-marksdev.appspot.com",
    messagingSenderId: "45081510984"
};
firebase.initializeApp(config)

export const database = firebase.database()
export const auth = firebase.auth()
