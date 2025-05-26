import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import {app} from '../../../Firebase/firebase.init'
import { getAuth } from "firebase/auth";



const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    // Register user
    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // sign out user
    const logout = () => {
        setLoading(true);
        return signOut(auth)
    }


    // observer a user/ on auth state change
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log("user in the on auth state change", currentUser);
        })
        return () => {
            unSubscribe();
        }
    }, [auth])



    const userInfo = {
        loading,
        user,
        registerUser,
        loginUser,
        logout,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;