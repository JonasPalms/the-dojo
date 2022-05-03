import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCajeL9f-hvIhlPXwdUOMmFTHNsIkWcHHM",
    authDomain: "the-dojo-site-58056.firebaseapp.com",
    projectId: "the-dojo-site-58056",
    storageBucket: "the-dojo-site-58056.appspot.com",
    messagingSenderId: "260313405143",
    appId: "1:260313405143:web:86ed5f7756d5ef8e07c292"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp }
