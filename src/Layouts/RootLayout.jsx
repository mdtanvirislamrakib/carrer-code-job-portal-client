import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';

const RootLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <main className='min-h-screen'>
                <Outlet />
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default RootLayout;