import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../../Components/Navbar/Navbar';
import useTitle from '../../../Hooks/useTitle';
import HomePage from '../HomePage/HomePage';
import './Home.css'

const Home = () => {
    useTitle('')
    const [leftShow, setLeftShow] = useState(true)
    const [rightShow, setRightShow] = useState(true)
    // const navigate = useNavigate()
    // let user = sessionStorage.getItem('user');
    // let users = JSON.parse(user);
    // useEffect(() => {
    //     if(user === '' || user === null){
    //         navigate('/')
    //         console.log(users === null)
    //     }
    // }, [])
    
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