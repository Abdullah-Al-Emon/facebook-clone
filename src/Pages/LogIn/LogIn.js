import React from 'react';
import useTitle from '../../Hooks/useTitle';
import Footer from '../Footer/Footer';
import './LogIn.css'
import LogInForm from './LogInForm/LogInForm';

const LogIn = () =>
{
    useTitle("log in or sign in")
    return (
        <div>
            <div className='banner-bg-color'>
                <div className='body'>
                    <div className='flex'>
                        <div className='left'>
                            <h1 className='heading-title'>facebook</h1>
                            <p>Facebook helps you connect and share <br /> with the people in your life.</p>
                        </div>
                        <div className='right'>
                            <LogInForm/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
};

export default LogIn;