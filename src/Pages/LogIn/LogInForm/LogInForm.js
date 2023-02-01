import { useFormik } from 'formik';
import './LogInForm.css'
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LogInForm = ({ toggleModal }) =>
{
    useEffect(() =>
    {
        sessionStorage.clear()
    }, [])

    const navigate = useNavigate();
    const { data: signUp = [] } = useQuery({
        queryKey: ['signUp'],
        queryFn: async () =>
        {
            const res = await fetch('https://63d8d9695a330a6ae16efd5e.mockapi.io/Signup');
            const data = await res.json();
            return data;
        }
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: values =>
        {
            // alert(JSON.stringify(values, null, 2));
            if (signUp && signUp.length) {
                const userlogin = signUp?.filter((el, k) =>
                {
                    if (el.email === values.email && el.password === values.password) {
                        navigate('/home')
                        sessionStorage.setItem('user', JSON.stringify(el))
                    }
                    return el.email === values.email && el.password === values.password;
                });
            }
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

            // signUp?.filter((el, k) =>
            // {
            //     if (values.email === el.email) {
            //         errors.email = 'Your is not match.'
            //     }
            //     console.log(el)
            //     console.log(values.email)
            // });

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