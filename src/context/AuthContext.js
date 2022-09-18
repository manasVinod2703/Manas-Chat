import { createContext, useEffect } from "react";
import React,{useState} from 'react';
import { auth } from "../firebase";  // our auth function
import { onAuthStateChanged } from "firebase/auth";  // to check the state of auth, if there is a user or nor


export const AuthContext = createContext();


export const AuthContextProvider = ({children})=>{
    const[currentUser,setCurrentUser] = useState({});
    
    // check for the user and set it to the current user
    useEffect(()=>{
         const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
            console.log(user);
         })

         //the cleaning function
         return()=>{
            unsub();
         }
    },[])

    return <AuthContext.Provider value={{currentUser}}>
            {children}
    </AuthContext.Provider>
}

