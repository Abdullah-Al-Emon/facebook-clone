import React from 'react';
import FastColumn from '../FastColumn/FastColumn';
import LastColumn from '../LastColumn/LastColumn';
import MainColumn from '../MainColumn/MainColumn';
import './HomePage.css'

const HomePage = () =>
{
    return (
        <div className='home-page'>
            <div className='home-flex'>
                <div className='s-column'><FastColumn /></div>
                <div className='m-column'><MainColumn/></div>
                <div className='e-column'><LastColumn/></div>
            </div>
        </div>
    );
};

export default HomePage;