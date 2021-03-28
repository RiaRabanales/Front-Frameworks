import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyASEWsgjpOyVrM690YjuYITLEC_bGMT_u8",
    authDomain: "playlistudemy.firebaseapp.com",
    projectId: "playlistudemy",
    storageBucket: "playlistudemy.appspot.com",
    messagingSenderId: "185495433429",
    appId: "1:185495433429:web:42a33ed2d27f9dba0df25c"
};

// init firebase y servicios
firebase.initializeApp(firebaseConfig)
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }