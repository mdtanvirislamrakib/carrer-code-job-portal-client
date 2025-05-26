import React, { useState } from 'react';
import AuthContext from '../AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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



    const userInfo = {
        loading,
        registerUser,
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;