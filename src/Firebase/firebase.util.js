import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 

const firebaseConfig = {
    apiKey: "AIzaSyDHiLxffhM7q-P7E7DwqY6sP92zUV7JP60",
    authDomain: "project-fos-7ae5e.firebaseapp.com",
    projectId: "project-fos-7ae5e",
    storageBucket: "project-fos-7ae5e.appspot.com",
    messagingSenderId: "900583722973",
    appId: "1:900583722973:web:fe64d3f01e9b0f682d3034",
    measurementId: "G-262CPSGNFK"
}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = () => {auth.signInWithPopup(provider);}

export default signInWithGoogle;