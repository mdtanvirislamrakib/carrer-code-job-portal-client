import React, { useState } from 'react';
import AuthContext from '../AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import {app} from '../../../Firebase/firebase.init'
import { getAuth } from "firebase/auth";



const AuthProvider = ({ children }) => {

    const auth = getAuth(app);

    const [loading, setLoading] = useState(true);


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



    const userInfo = {
        loading,
        registerUser,
        loginUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;