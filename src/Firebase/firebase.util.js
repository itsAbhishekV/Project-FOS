import firebase from 'firebase/app';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBQv2luo9OBF4v5WqKcn51Sovo2lF4GB9c",
    authDomain: "project-fos.firebaseapp.com",
    projectId: "project-fos",
    storageBucket: "project-fos.appspot.com",
    messagingSenderId: "405284714495",
    appId: "1:405284714495:web:2e7661cbbaedbb0a8bd9ca"
}

const app = initializeApp(firebaseConfig);