import firebase from 'firebase';
import 'firebase/app'
import 'firebase/firebase-firestore'
import 'firebase/auth'

const firebaseConfig  = {
    apiKey: "AIzaSyACaE1ZfGkbMi3f0d8z0VEZoyyyUJNCfDc",
    authDomain: "basicreact-9cbf0.firebaseapp.com",
    databaseURL: "https://basicreact-9cbf0.firebaseio.com",
    projectId: "basicreact-9cbf0",
    storageBucket: "basicreact-9cbf0.appspot.com",
    messagingSenderId: "77537135190",
    appId: "1:77537135190:web:93149e9b6cc0ec3784c9f7",
    measurementId: "G-0KFKE77FVQ"
}

const firebaseApp =  firebase.initializeApp(firebaseConfig );

export default firebaseApp ;