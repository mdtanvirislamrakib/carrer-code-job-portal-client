import React, { Suspense, use } from 'react';
import AuthContext from '../../Contexts/AuthContext/AuthContext';
import JobList from '../../Component/JobList/JobList';
import Loader from '../../Shared/Loader';

const MyPostedJob = () => {

    const { user } = use(AuthContext);

    const jobUploadPromise = fetch(`http://localhost:5000/jobs?email=${user.email}`).then(res => res.json())

    return (
        <div>
            <Suspense fallback={<Loader></Loader>}>
                <JobList jobUploadPromise={jobUploadPromise}></JobList>
            </Suspense>
        </div>
    );
};

export default MyPostedJob;