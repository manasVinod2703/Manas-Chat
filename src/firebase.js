import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getStorage,ref} from 'firebase/storage'
import {getFirestore} from  'firebase/firestore'


const firebaseConfig = {
    
  apiKey: "AIzaSyDdjV5HdEsOPcx3kN74-12VvYh7Pw6Bj2k",
  authDomain: "chat-17924.firebaseapp.com",
  projectId: "chat-17924",
  storageBucket: "chat-17924.appspot.com",
  messagingSenderId: "301633413133",
  appId: "1:301633413133:web:5809a509ef14d48888b544",
  measurementId: "G-SPQPNQ8HEN"

}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();  // to store the images to the cloud
export const db = getFirestore();