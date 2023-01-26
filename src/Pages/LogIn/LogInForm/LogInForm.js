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
              } else if (values.password.length < 8) {
                errors.password = "Password must be 8 characters long.";
              } else if (!passwordRegex.test(values.password)) {
                errors.password = "Invalid password. Must contain one number.";
              }

              console.log(errors)

            return errors;
        }
    });
    return (
        <div className='form-div m'>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        placeholder='Email address or phone number '
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