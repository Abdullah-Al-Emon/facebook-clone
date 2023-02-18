import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import useTitle from '../../Hooks/useTitle';
import FastColumn from '../../Pages/Home/FastColumn/FastColumn';
import LastColumn from '../../Pages/Home/LastColumn/LastColumn';
import './HomePageLayout.css'
import { Outlet } from 'react-router-dom';

const HomePageLayout = () =>
{
    useTitle('', '')
    const [leftShow, setLeftShow] = useState(true)
    const [rightShow, setRightShow] = useState(true)

    return (
        <div className='home'>
            <Navbar
                leftShow={leftShow}
                setLeftShow={setLeftShow}
                rightShow={rightShow}
                setRightShow={setRightShow}
            />
            <div className='home-page'>
                <div className='home-flex'>
                    <div className={`sm-column ${leftShow ? 's-column' : 's-column-absolute'}`}><FastColumn leftShow={leftShow} /> </div>
                    {/* <MainColumn /> */}
                    <Outlet/>
                    <div className={`em-column ${rightShow ? 'e-column' : 'e-column-absolute'}`}><LastColumn /></div>
                </div>
            </div>
        </div>
    );
};

export default HomePageLayout;