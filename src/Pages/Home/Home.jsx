import React from 'react';
import Banner from '../../Component/Banner/Banner';
import BrowseByCategory from '../../Component/BrowseByCategory/BrowseByCategory';
import JobsOfTheDay from '../../Component/JobsOfTheDay/JobsOfTheDay';


const jobsDataPromise = fetch('http://localhost:5000/jobs').then(res => res.json())
const Home = () => {



    return (
        <div>
            <Banner></Banner>
            <BrowseByCategory></BrowseByCategory>

            <JobsOfTheDay jobsDataPromise = {jobsDataPromise}></JobsOfTheDay>
        </div>
    );
};

export default Home;