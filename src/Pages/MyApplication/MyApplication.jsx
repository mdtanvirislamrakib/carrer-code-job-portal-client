import React, { Suspense, use } from 'react';
import ApplicationList from '../../Component/ApplicationList/ApplicationList';
import Loader from '../../Shared/Loader';
import AuthContext from '../../Contexts/AuthContext/AuthContext';

const MyApplication = () => {

    const {user} = use(AuthContext)

    const applicationDataPromise = fetch(`http://localhost:5000/applications?email=${user.email}`).then(res => res.json())
    return (
        <div>
            <Suspense fallback={<Loader></Loader>}>
              <ApplicationList applicationDataPromise = {applicationDataPromise}></ApplicationList>  
            </Suspense>
            
        </div>
    );
};

export default MyApplication;