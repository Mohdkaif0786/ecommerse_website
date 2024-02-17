import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM6y7tAEU6-6Un4S4nbEJG2j_4zU6gSY8",
  authDomain: "ecommerse-813e6.firebaseapp.com",
  projectId: "ecommerse-813e6",
  storageBucket: "ecommerse-813e6.appspot.com",
  messagingSenderId: "114159322869",
  appId: "1:114159322869:web:964d3889ea67389eb8e7bc"
};



const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app); 