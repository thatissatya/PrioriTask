// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCa4WhFdv6sDbBLcaTikPhPsH-YwqPFvHE",
  authDomain: "priori-task.firebaseapp.com",
  projectId: "priori-task",
  storageBucket: "priori-task.appspot.com",
  messagingSenderId: "228528016918",
  appId: "1:228528016918:web:053c828e3ea08055ed6f37",
  measurementId: "G-QWFG9FLQDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);