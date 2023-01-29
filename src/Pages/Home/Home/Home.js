import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import Navbar from '../../Navbar/Navbar';
import HomePage from '../HomePage/HomePage';

const Home = () => {
    useTitle('')
    return (
        <div>
            <Navbar/>
            <HomePage/>
        </div>
    );
};

export default Home;