import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBQv2luo9OBF4v5WqKcn51Sovo2lF4GB9c",
    authDomain: "project-fos.firebaseapp.com",
    projectId: "project-fos",
    storageBucket: "project-fos.appspot.com",
    messagingSenderId: "405284714495",
    appId: "1:405284714495:web:2e7661cbbaedbb0a8bd9ca"
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})

const signInWithGoogle = () => firebase.auth().signInWithPopup(provider);
export default signInWithGoogle;