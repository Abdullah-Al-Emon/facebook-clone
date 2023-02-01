import React, { useState } from 'react';
import Navbar from '../../../Components/Navbar/Navbar';
import useTitle from '../../../Hooks/useTitle';
import HomePage from '../HomePage/HomePage';
import './Home.css'

const Home = () => {
    useTitle('')
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
            <HomePage leftShow={leftShow} rightShow={rightShow}/>
        </div>
    );
};

export default Home;