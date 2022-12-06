import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext } from 'react';
import app from '../../firebase/firebase.init';
import { useEffect } from 'react';



export const AuthContext=createContext();
const auth = getAuth(app);

const UserContext = ({children}) => {
    const [user,setUser]=useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
            
        })
        return () => {
            unsubscribe();
        }
    }, [])
    //for Email and password
    const createUser=(email,password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)

    }

    //for signIn
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //for signout
    const logOut=()=>{
        return signOut(auth)
    }
    //for update user
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    const authInfo={
        user,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        loading
       
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
         

        </AuthContext.Provider>
    );
};

export default UserContext;