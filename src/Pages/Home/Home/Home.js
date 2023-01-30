import React from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import useTitle from '../../../Hooks/useTitle';
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