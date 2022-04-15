// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQCcgOaFnVBXEeOMKVhHgpalViiYoI4oY",
  authDomain: "genius-car-services-7ae9e.firebaseapp.com",
  projectId: "genius-car-services-7ae9e",
  storageBucket: "genius-car-services-7ae9e.appspot.com",
  messagingSenderId: "1086563674066",
  appId: "1:1086563674066:web:37fb3b2048fcab1bdcca0b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
