import React from 'react';
import { useFormik } from 'formik';
import './LogInForm.css'

const LogInForm = ({ toggleModal }) =>
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

            console.log(errors)

            return errors;
        }
    });
    return (
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
    );
};

export default LogInForm;