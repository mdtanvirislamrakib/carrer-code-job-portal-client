import React, { use } from 'react';
import AuthContext from '../AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../../../Shared/Loader';

const PrivetRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user && user?.email) {
        return children
    }


    return <Navigate to={"/login"} state={location.pathname}></Navigate>


};

export default PrivetRoute;