import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Modal from '../../Components/Modal/Modal';
import { logInAPI } from '../../Helpers/ConfigAPI';
import useTitle from '../../Hooks/useTitle';
import './LogIn.css'
import './LogInForm.css'

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

    useEffect(() =>
    {
        sessionStorage.clear()
    }, [])

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values =>
        {
            const logIn = {
                email: values.email,
                password: values.password
            }

            fetch(logInAPI, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(logIn)
            })
                .then(res => res.json())
                .then(data =>
                {
                    if (data) {
                        navigate('/home')
                        sessionStorage.setItem('user', JSON.stringify(data))
                    }
                })
        },
        validate: (values) =>
        {
            const errors = {};
            if (!values.email) {
                errors.email = 'Type your email';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }

            const passwordRegex = /(?=.*[0-9])/;

            if (!values.password) {
                errors.password = "Type your password";
            } else if (values.password.length < 6) {
                errors.password = "Password must be 6 characters long.";
            } else if (!passwordRegex.test(values.password)) {
                errors.password = "Invalid password. Must contain one number.";
            }

            // console.log(errors)

            return errors;
        }
    });

    return (
        <div className='banner-bg-color'>
            <div className='body'>
                <div className='flex'>
                    <div className='left'>
                        <h1 className='heading-title'>facebook</h1>
                        <p>Facebook helps you connect and share <br /> with the people in your life.</p>
                    </div>
                    <div className='right'>
                        <div>
                            <div className='form-div m'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input
                                            placeholder='Email address'
                                            className='input-field'
                                            id="email"
                                            name="email"
                                            type="email"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                        />
                                        {formik.errors.email && formik.touched.email && formik.errors.email && <span className='error'>{formik.errors.email}</span>}
                                    </div>
                                    <div>
                                        <input
                                            className='input-field'
                                            placeholder='Password'
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                        />
                                        {formik.errors.password && formik.touched.password && formik.errors.password && <span className='error'>{formik.errors.password}</span>}
                                    </div>
                                    <div>
                                        <button type="submit">Log in</button>
                                    </div>
                                    <div className='forget'>
                                        <a href="">Forgotten Password?</a>
                                    </div>
                                    <div className='lines'></div>
                                    <button type='button' onClick={toggleModal} className='create'>Create New Account</button>
                                </form>
                            </div>
                            <div className='create-page'>
                                <a href="https://www.facebook.com/pages/create/?ref_type=registration_form">Create a Page</a> for a celebrity, brand or business.
                            </div>
                        </div>
                        {modal && (<Modal toggleModal={toggleModal} setModal={setModal} modal={modal} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LogIn;