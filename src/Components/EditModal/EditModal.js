import { useFormik } from "formik";
import { RxCross2 } from 'react-icons/rx'
import { useRef, useState } from "react";
import { signUpAPI } from "../../Helpers/ConfigAPI";
import { toast } from "react-hot-toast";
import axios from "axios";
import "./EditModal.css";


export default function EditModal({ toggleEditModal, setEditModal, editModal })
{
    const [isLoading, setIsLoading] = useState(false)
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);

    const fileRef = useRef(null)
    const coverImgRef = useRef(null)

    const formik = useFormik({
        initialValues: {
            first_name: '',
            surname: '',
            student: '',
            lives_In: '',
            from: '',
            img: null,
            cover_img: null,

        },
        onSubmit: values =>
        {
            console.log(values)
            setIsLoading(true)

            const image = values.img;
            const fromData = new FormData();
            fromData.append('file', image)
            // fromData.append('file', cover)
            fromData.append('upload_preset', 'imagexlm')
            fromData.append('folder', 'First')
            const url = `https://api.cloudinary.com/v1_1/drh68zyt1/image/upload`
            axios.post(url,
                fromData
            )
                .then(img =>
                {
                    console.log(img.data.url)
                    const cover1 = values.cover_img;
                    const fromData1 = new FormData();
                    fromData1.append('file', cover1)
                    fromData1.append('upload_preset', 'imagexlm')
                    fromData1.append('folder', 'First')
                    const urls = `https://api.cloudinary.com/v1_1/drh68zyt1/image/upload`
                    axios.post(urls,
                        fromData1
                    )
                        .then(coverImg =>
                        {
                            console.log(coverImg.data.url)
                            const UpdateProfile = {
                                first_name: values.first_name,
                                surname: values.surname,
                                cover_Img: coverImg.data.url,
                                img: img.data.url,
                                student: values.student,
                                lives_In: values.lives_In,
                                from: values.from
                            }
                            axios.put(`https://facebook-clone-m-server-side.vercel.app/register/${users?._id}`,
                                UpdateProfile
                            )
                                .catch(err => console.log(err))
                                .then(result =>
                                {
                                    setIsLoading(false)
                                    console.log(result.data)
                                    sessionStorage.setItem('user', JSON.stringify(result.data))
                                    formik.resetForm()

                                    if (result.data) {
                                        toast.success("Edit Successfully")
                                    }
                                    setEditModal(!editModal)
                                })
                                .catch(err => console.log(err))
                        })
                })

        },
        validate: values =>
        {
            const errors = {};

            if (!/^[a-zA-z.,]+([\s][a-zA-Z.,]+)*$/i.test(values.first_name)) {
                errors.first_name = 'Type Your First Name'
            }

            if (!/^[a-zA-z.,]+([\s][a-zA-Z.,]+)*$/i.test(values.surname)) {
                errors.surname = 'Type your Surname';
            }

            return errors;
        }
    });

    return (

        <div className="modal">
            <div onClick={toggleEditModal} className="overlay"></div>
            <div className="modal-content">
                <div>
                    <h2>My Profile Edit</h2>
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
                                placeholder='Student'
                                id="student"
                                name="student"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.student}
                            />
                        </div>
                        <div>
                            <input
                                className='input-long'
                                placeholder='Lives In'
                                id="lives_In"
                                name="lives_In"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lives_In}
                            />

                        </div>
                        <div>
                            <input
                                className='input-long'
                                placeholder='From address'
                                id="from"
                                name="from"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.from}
                            />

                        </div>
                        <div >
                            {/* <label htmlFor="img" className="label">Profile Photo</label> */}
                            <input id="img" ref={fileRef} name="img" type="file" onChange={(event) =>
                            {
                                formik.setFieldValue("img", event.currentTarget.files[0]);
                            }} className="form-control" />
                            <button onBlur={formik.handleBlur} name='img' type="button" className="input-long cursor" onClick={() =>
                            {
                                fileRef.current.click()
                            }}>Update Profile photo</button>

                        </div>
                        <div >
                            <input id="cover_img" ref={coverImgRef} name="cover_img" type="file" onChange={(event) =>
                            {
                                formik.setFieldValue("cover_img", event.currentTarget.files[0]);
                            }} className="form-control" />
                            <button onBlur={formik.handleBlur} name='cover_img' type="button" className="input-long cursor" onClick={() =>
                            {
                                coverImgRef.current.click()
                            }}>Upload Cover photo</button>
                        </div>
                        <div className="modal-button">
                            <button disabled={isLoading} type="submit">{isLoading && <div className="load"></div>}Save</button>
                        </div>
                    </form>
                </div>
                <div className="close-modal" onClick={toggleEditModal}>
                    <RxCross2 className="icon" />
                </div>
            </div>
        </div>

    );
}