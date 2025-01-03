import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto px-2'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;