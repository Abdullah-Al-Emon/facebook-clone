import { useFormik } from "formik";
import "./Modal.css";
import {RxCross2} from 'react-icons/rx'


export default function Modal({ toggleModal, setModal, modal })
{

    const formik = useFormik({
        initialValues: {
            first_name: '',
            surname: '',
            email: '',
            password: '',
            birth_date: '',
            gender: ''
        },
        onSubmit: values =>
        {
            setModal(!modal)
            formik.resetForm()
            // console.log(values)
            // alert(JSON.stringify(values, null, 2));
        },
        validate: values =>
        {
            const errors = {};

            if(!/^[a-zA-z]+([\s][a-zA-Z]+)*$/i.test(values.first_name)){
                errors.first_name = 'Type Your First Name'
            }

            if (!/^[a-zA-z]+([\s][a-zA-Z]+)*$/i.test(values.surname)) {
                errors.surname = 'Type your Surname';
            }

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

            if (!values.birth_date) {
                errors.birth_date = 'Type your Date of Birth';
            }
            console.log(values)
            console.log(errors)
            return errors;
        }
    });

    return (

        <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">
                <div>
                    <h2>Sign Up</h2>
                    <p>It's quick and easy</p>
                </div>
                <div className="line-modal"></div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="input-flex">
                            <div>
                                <input
                                    placeholder='First name'
                                    className='input'
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.first_name}
                                />
                                {formik.errors.first_name && formik.touched.first_name && formik.errors.first_name && <span className='errors'>{formik.errors.first_name}</span>}
                            </div>
                            <div>
                                <input
                                    className='input'
                                    placeholder='Surname'
                                    id="surname"
                                    name="surname"
                                    type="text"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.surname}
                                />
                                {formik.errors.surname && formik.touched.surname && formik.errors.surname && <span className='errors'>{formik.errors.surname}</span>}
                            </div>
                        </div>
                        <div>
                            <input
                                className='input-long'
                                placeholder='Email address'
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.errors.email && formik.touched.email && formik.errors.email && <span className='errors'>{formik.errors.email}</span>}
                        </div>
                        <div>
                            <input
                                className='input-long'
                                placeholder='New Password'
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                            />
                            {formik.errors.password && formik.touched.password && formik.errors.password && <span className='errors'>{formik.errors.password}</span>}
                        </div>
                        <div>
                            <label htmlFor="birth_date" className="label">Date of birth</label>
                            <input
                                className='input-long'
                                placeholder=''
                                id="birth_date"
                                name="birth_date"
                                type="date"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.birth_date}
                            />
                            {formik.errors.birth_date && formik.touched.birth_date && formik.errors.birth_date && <span className='errors'>{formik.errors.birth_date}</span>}
                        </div>
                        <div>
                            <label htmlFor="gender" className="label">Gender</label>
                            <div className="input-flex">
                                <div className="radio-div">
                                    <label htmlFor="female">Female</label>
                                    <input
                                        id="female"
                                        name="gender"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.gender}
                                    />
                                </div>
                                <div className="radio-div">
                                    <label htmlFor="male">Male</label>
                                    <input
                                        id="male"
                                        name="gender"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.gender}
                                    />
                                </div>
                                <div className="radio-div">
                                    <label htmlFor="custom">Custom</label>
                                    <input
                                        id="custom"
                                        name="gender"
                                        type="radio"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.gender}
                                    />
                                </div>
                            </div>
                            {formik.errors.gender && formik.touched.gender && formik.errors.gender && <span className='errors'>{formik.errors.gender}</span>}
                        </div>
                        <div>
                            <p>People who use our service may have uploaded your contact information to Facebook. <a href="https://www.facebook.com/help/637205020878504">Learn more.</a></p>
                            <p>
                                By clicking Sign Up, you agree to our
                                <a href="https://www.facebook.com/legal/terms/update">Terms</a>, <a href="https://www.facebook.com/privacy/policy/?entry_point=data_policy_redirect&entry=0">
                                    Privacy Policy</a> and <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies Policy.</a> You may receive
                                SMS notifications from us and can opt out at any time.
                            </p>
                        </div>
                        <div className="modal-button">
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className="close-modal" onClick={toggleModal}>
                    <RxCross2 className="icon"/>
                </div>
            </div>
        </div>

    );
}