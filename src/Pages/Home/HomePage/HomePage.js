import React from 'react';
import FastColumn from '../FastColumn/FastColumn';
import LastColumn from '../LastColumn/LastColumn';
import MainColumn from '../MainColumn/MainColumn';
import './HomePage.css'

const HomePage = ({leftShow, rightShow}) =>
{
    // className={leftShow ? 's-column' : 's-column-absolute'}
    
    return (
        <div className='home-page'>
            <div className='home-flex'>
                <div className={`sm-column ${leftShow ? 's-column' : 's-column-absolute'}`}><FastColumn leftShow={leftShow} /> </div>
                <div className='m-column'><MainColumn/></div>
                <div className={`em-column ${rightShow ? 'e-column' : 'e-column-absolute'}`}><LastColumn/></div>
            </div>
        </div>
    );
};

export default HomePage;