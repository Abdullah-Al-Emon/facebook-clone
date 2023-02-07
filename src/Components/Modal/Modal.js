import { useFormik } from "formik";
import "./Modal.css";
import { RxCross2 } from 'react-icons/rx'
import { useRef, useState } from "react";
import { signUpAPI } from "../../Helpers/ConfigAPI";
import { toast } from "react-hot-toast";


export default function Modal({ toggleModal, setModal, modal })
{
    const [isLoading, setIsLoading] = useState(false)

    const fileRef = useRef(null)
    const formik = useFormik({
        initialValues: {
            first_name: '',
            surname: '',
            email: '',
            password: '',
            birth_date: '',
            file: null
        },
        onSubmit: values =>
        {
            setIsLoading(true)
            formik.resetForm()
            const image = values.file;
            const fromData = new FormData();
            fromData.append('file', image)
            fromData.append('upload_preset', 'imagexlm')
            fromData.append('folder', 'First')
            const url = `https://api.cloudinary.com/v1_1/drh68zyt1/image/upload`
            fetch(url, {
                method: 'POST',
                body: fromData
            })
                .then(res => res.json())
                .then(imgData =>
                {
                    setIsLoading(false)
                    const signUp = {
                        first_name: values.first_name,
                        surname: values.surname,
                        email: values.email,
                        password: values.password,
                        birth_date: values.birth_date,
                        img: imgData.secure_url
                    }
                    fetch(signUpAPI, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(signUp)
                    })
                        .then(res => res.json())
                        .then(result =>
                        {
                            // console.log(result)
                            if(result.message){
                                toast.success(result.message)
                            }
                            if(result.error){
                                toast.error(result.error)
                            }
                            setModal(!modal)
                            // window.location.reload(true)
                        })
                })
        },
        validate: values =>
        {
            const errors = {};

            if (!/^[a-zA-z]+([\s][a-zA-Z]+)*$/i.test(values.first_name)) {
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
                errors.birth_date = 'Type your Date of Birth'
            }
            if (!values.file) {
                errors.file = 'Upload your photo';
            }
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
                        <div >
                            <label htmlFor="file" className="label">Photo</label>
                            <input id="file" ref={fileRef} name="file" type="file" onChange={(event) =>
                            {
                                formik.setFieldValue("file", event.currentTarget.files[0]);
                            }} className="form-control" />
                            <button onBlur={formik.handleBlur} name='file' type="button" className="input-long cursor" onClick={() =>
                            {
                                fileRef.current.click()
                            }}>Upload photo</button>
                            {formik.errors.file && formik.touched.file && formik.errors.file && <span className='errors'>{formik.errors.file}</span>}
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
                            <button disabled={isLoading} type="submit">{isLoading && <div className="load"></div>}Sign Up</button>
                        </div>
                    </form>
                </div>
                <div className="close-modal" onClick={toggleModal}>
                    <RxCross2 className="icon" />
                </div>
            </div>
        </div>

    );
}