// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail
} from "firebase/auth";

// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyCa4WhFdv6sDbBLcaTikPhPsH-YwqPFvHE",
    authDomain: "priori-task.firebaseapp.com",
    projectId: "priori-task",
    storageBucket: "priori-task.appspot.com",
    messagingSenderId: "228528016918",
    appId: "1:228528016918:web:053c828e3ea08055ed6f37",
    measurementId: "G-QWFG9FLQDX"
});



// handling authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const loginWithEmailPassword = async (userCredentials = {}) => {
    const user = await signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
}

const createAccount = async (userCredentials = {}) => {
    const user = await createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
}

const logout = async () => {
    await signOut(auth)
}
const googleAuthentication = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user)
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
}

const forgetPassword = async(email, setConfirmation={}) => {
    sendPasswordResetEmail(auth, email)
        .then(() => {
            setConfirmation()
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export { auth, loginWithEmailPassword, logout, createAccount, googleAuthentication, onAuthStateChanged, forgetPassword }