import React from 'react';
import { HashLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='min-h-screen flex items-center justify-center border w-full'>
            <HashLoader
                color="#31cdd2"
                cssOverride={{}}
                loading
                size={60}
            />
        </div>
    );
};

export default Loader;