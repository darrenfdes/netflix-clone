// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXEkCLFne4ylBEa2wPggT-3c6bgGGiy4c",
  authDomain: "netflix-clone-f538c.firebaseapp.com",
  projectId: "netflix-clone-f538c",
  storageBucket: "netflix-clone-f538c.appspot.com",
  messagingSenderId: "722169500154",
  appId: "1:722169500154:web:f286f26a1e88c3756f5443"
};

// Initialize Firebase
const app =!getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth=getAuth();

export default app
export {db,auth}