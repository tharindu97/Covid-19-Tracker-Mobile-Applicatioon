import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPHgzDJk4o2pSzrWRLCkOyehqXHSXd1ms",
    authDomain: "covid-19-c7574.firebaseapp.com",
    projectId: "covid-19-c7574",
    storageBucket: "covid-19-c7574.appspot.com",
    messagingSenderId: "517860339239",
    appId: "1:517860339239:web:6b023f9feaa080fe902802"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };