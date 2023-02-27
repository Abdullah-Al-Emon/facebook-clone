import { Formik } from "formik";
import "./PostingModal.css";
import { RxCross2 } from 'react-icons/rx'
import { GiEarthAsiaOceania } from "react-icons/gi";
import { useRef, useState } from "react";
import PreviewImage from "../PreviewImage/PreviewImage";
import { format } from "date-fns";
import { API } from "../../Helpers/ConfigAPI";
import { toast } from "react-hot-toast";
import axios from "axios";


export default function PostingModal({ togglePostingModal, setPostingModal, postingModal, setState })
{
    const [isLoading, setIsLoading] = useState(false)
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    // const {setStates} = useContext(Context)
    const fileRef = useRef(null)
    const profile_pic = users?.img;
    const first_name = users?.first_name;
    const surname = users?.surname;

    const todayDate = new Date()
    const date = format(todayDate, 'PPpp')

    // const [preview, setPreview] = useState(null)


    // const reader = new FileReader();
    // reader.readAsBinaryString('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N');
    // reader. = () => {
    //     setPreview(reader.result);
    // }
    // console.log(preview)


    return (

        <div className="posting-modal">
            <div onClick={togglePostingModal} className="posting-overlay"></div>
            <div className="posting-modal-content">
                <div>
                    <h2>Create Post</h2>
                </div>
                <div className="line"></div>

                <div>
                    <Formik
                        initialValues={{ post: '', file: null, option: '' }}
                        onSubmit={(values) =>
                        {
                            // console.log(values.file)
                            setIsLoading(true)
                            if (values.file === null) {
                                const post = {
                                    options: values.option,
                                    profile_pic: profile_pic,
                                    name: { first_name: first_name, surname: surname },
                                    time: date,
                                    desc: values.post,
                                    post_img: '',
                                    visibility: "Visible",
                                    user_id: users?._id,
                                    share: "0",
                                }
                                axios.post(API + '/post',
                                    post
                                )
                                    .then(res =>
                                    {
                                        if (res.data.message) {
                                            toast.success(res.data.message)
                                        }
                                        setState(prev => !prev)
                                        setIsLoading(false)
                                        setPostingModal(!postingModal)
                                    })
                                    .catch(err => console.log(err))
                            } else {
                                const image = values?.file;
                                const fromData = new FormData();
                                fromData?.append('file', image)
                                fromData?.append('upload_preset', 'imagexlm')
                                fromData?.append('folder', 'First')
                                const url = `https://api.cloudinary.com/v1_1/drh68zyt1/image/upload`
                                axios.post(url,
                                    fromData
                                )
                                    .then(imgData =>
                                    {
                                        const post = {
                                            options: values.option,
                                            profile_pic: profile_pic,
                                            name: { first_name: first_name, surname: surname },
                                            time: date,
                                            desc: values.post,
                                            post_img: imgData.data.secure_url,
                                            visibility: "Visible",
                                            user_id: users?._id,
                                            share: "0",
                                        }
                                        axios.post(API + '/post',
                                            post
                                        )
                                            .then(res =>
                                            {
                                                if (res.data.message) {
                                                    toast.success(res.data.message)
                                                }
                                                setState(prev => !prev)
                                                setIsLoading(false)
                                                setPostingModal(!postingModal)
                                            })
                                            .catch(err => console.log(err))
                                    })
                                    .catch(err => console.log(err))
                            }
                        }}
                        validate={(values) =>
                        {
                            const errors = {};

                            if (!/^[a-zA-z.,]+([\s][a-zA-Z.,]+)*$/i.test(values.post)) {
                                errors.post = 'Type Your mind?'
                            }
                            if (!values.option) {
                                errors.option = 'Select Your Post Type'
                            }
                            // console.log(errors)
                            return errors;
                        }}
                    >
                        {({ values, handleSubmit, setFieldValue, handleChange, errors, touched, handleBlur }) =>
                        {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div className='posting-flex between '>
                                        <div className='posting-flex'>
                                            <div>
                                                <img className='nav-img' src={users?.img} alt="" />
                                            </div>
                                            <div className="">
                                                <h3>{users?.first_name} {users?.surname}</h3>
                                                <div className="posting-flex">
                                                    <select
                                                        className="select"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        name="option">
                                                        <option value=''>Choose</option>
                                                        <option value='Public'>Public</option>
                                                        <option value='Privacy'>Privacy</option>
                                                    </select> <GiEarthAsiaOceania />
                                                    {errors.option && touched.option && errors.option && <span className='errors'>{errors.option}</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <textarea
                                        name="post"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder={`What's on your mind, ${users?.first_name} ${users?.surname}?`}
                                        className="posting-input" ></textarea>
                                    {errors.post && touched.post && errors.post && <span className='errors'>{errors.post}</span>}
                                    <div >
                                        {values?.file && <PreviewImage file={values?.file} />}
                                        <input id="file" ref={fileRef} name="file" type="file" onChange={(event) =>
                                        {
                                            setFieldValue("file", event.currentTarget.files[0]);
                                        }} className="form-control" />
                                        {/* <button type="button" className="form-group" onClick={() =>
                                        {
                                            fileRef.current.click()
                                        }}>Upload photo</button> */}
                                    </div>
                                    <div className="button-post-div">
                                        <div className="add-post">
                                            <div className="a">Add to your post</div>
                                            <div className="icons-flex">
                                                <div className="-div" onClick={() =>
                                                {
                                                    fileRef.current.click()
                                                }}>
                                                    <span className="pht"></span>
                                                </div>
                                                <div className="-div">
                                                    <span className="frnd"></span>
                                                </div>
                                                <div className="-div">
                                                    <span className="emoji"></span>
                                                </div>
                                                <div className="-div">
                                                    <span className="location"></span>
                                                </div>
                                                <div className="-div">
                                                    <span className="flag"></span>
                                                </div>
                                                <div className="-div">
                                                    <span className="menus"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" disabled={isLoading} className="posting-button">{isLoading && <div className="loaders"></div>} Post</button>
                                    </div>
                                </form>
                            );
                        }}
                    </Formik>
                </div>
                <div className="posting-close-modal" onClick={togglePostingModal}>
                    <RxCross2 className="icons" />
                </div>
            </div>
        </div>

    );
}