import React, { useEffect, useState } from 'react';
import AuthContext from '../AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import {app} from '../../../Firebase/firebase.init'
import { getAuth } from "firebase/auth";
import axios from 'axios';



const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    // add provider
    const provider = new GoogleAuthProvider()

    // state managment state
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

    // sign In with google
    const googleLogin = () => {
        return signInWithPopup(auth, provider)
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
            if(currentUser?.email) {
                const userData = {email: currentUser?.email}
                axios.post('http://localhost:5000/jwt', userData, {
                    withCredentials: true
                })
                .then(res => {
                    console.log("Toke afte JWT", res.data);
                })
                .catch(err => console.log(err))
            }
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
        googleLogin,
        logout,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;