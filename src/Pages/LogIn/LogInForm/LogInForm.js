import React from 'react';
import { useFormik } from 'formik';
import './LogInForm.css'

const LogInForm = () =>
{
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values =>
        {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className='form-div'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        placeholder='Email address or phone number '
                        className='input-field'
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div>
                    <input
                        className='input-field'
                        placeholder='Password'
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
            </form>
            <div className='forget'>
                <a href="">Forgotten Password?</a>
            </div>
            <div className='lines'></div>
            <button className='create'>Create New Account</button>
        </div>
    );
};

export default LogInForm;