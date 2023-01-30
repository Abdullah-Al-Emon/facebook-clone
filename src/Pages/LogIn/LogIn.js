import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Modal from '../../Components/Modal/Modal';
import useTitle from '../../Hooks/useTitle';
import './LogIn.css'
import LogInForm from './LogInForm/LogInForm';

const LogIn = () =>
{
    useTitle("- log in or sign in")

    const [modal, setModal] = useState(false);

    const toggleModal = () =>
    {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

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
                            <LogInForm toggleModal={toggleModal} />
                            {modal && (<Modal toggleModal={toggleModal} setModal={setModal} modal={modal} />)}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default LogIn;