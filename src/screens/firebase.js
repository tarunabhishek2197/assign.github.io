
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDgozbAv_Yy_kqqphPg42xcpg5uddzcPMc",
    authDomain: "nordstonen.firebaseapp.com",
    projectId: "nordstonen",
    storageBucket: "nordstonen.appspot.com",
    messagingSenderId: "941636892978",
    appId: "1:941636892978:web:c7b102f42731e691187f2b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getDatabase(app);
 
