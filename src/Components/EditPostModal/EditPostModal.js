import { Formik, useFormik } from "formik";
import { RxCross2 } from 'react-icons/rx'
import { GiEarthAsiaOceania } from "react-icons/gi";
import { useRef, useState } from "react";
import PreviewImage from "../PreviewImage/PreviewImage";
import { format } from "date-fns";
import { API } from "../../Helpers/ConfigAPI";
import { toast } from "react-hot-toast";
import axios from "axios";
// import { Context } from "../../Context/StateManage";
import "./EditPostModal.css";


export default function EditPostModal({ _id, post_img, options, desc, toggleEditPostModal, setEditPostModal, editPostModal, setState })
{
    const [isLoading, setIsLoading] = useState(false)
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    // const {setStates} = useContext(Context)
    const fileRef = useRef(null)
    // setState(prev => !prev)
    // const profile_pic = users?.img;
    // const first_name = users?.first_name;
    // const surname = users?.surname;

    // const todayDate = new Date()
    // const date = format(todayDate, 'PPpp')

    const formik = useFormik({
        initialValues: {
            post: `${desc}`, 
            file: `${post_img}`, 
            option: `${options}`
        },
        onSubmit: values =>
        {
            console.log(values)

            setIsLoading(true)
            const image = values.file;
            const fromData = new FormData();
            fromData.append('file', image)
            fromData.append('upload_preset', 'imagexlm')
            fromData.append('folder', 'First')
            const url = `https://api.cloudinary.com/v1_1/drh68zyt1/image/upload`
            axios.post(url,
                fromData
            )
                .then(imgData =>
                {
                    const post = {
                        options: values.option,
                        desc: values.post,
                        post_img: imgData.data.secure_url,
                    }
                    axios.put(API + `/postEdit/${_id}`,
                        post
                    )
                        .then(res =>
                        {
                            // if (res.data.message) {
                            //     toast.success(res.data.message)
                            // }
                            setState(prev => !prev)
                            setIsLoading(false)
                            setEditPostModal(!editPostModal)
                        })
                        .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
        },
        validate: values =>
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
        }
    })

    const handlePostDelete = (_id) => {
        axios.delete( `/postDelete/${_id}`)
        .then(res => {
            setState(prev => !prev)
            setEditPostModal(!editPostModal)
        })
    }



    return (

        <div className="posting-modal">
            <div onClick={toggleEditPostModal} className="posting-overlay"></div>
            <div className="posting-modal-content">
                <div>
                    <h2>Edit Post</h2>
                </div>
                <div className="line"></div>
                <div className="post-dlt-btn">
                    <button onClick={() => handlePostDelete(_id)} type="button">Delete Post</button>
                </div>
                <div>
                    <form onSubmit={formik.handleSubmit}>
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
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            name="option"
                                        >
                                            <option value=''>Choose</option>
                                            <option value='Public'>Public</option>
                                            <option value='Privacy'>Privacy</option>
                                        </select> <GiEarthAsiaOceania />
                                        {formik.errors.option && formik.touched.option && formik.errors.option && <span className='errors'>{formik.errors.option}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <textarea
                            id="post"
                            name="post"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            placeholder={`What's on your mind, ${users?.first_name} ${users?.surname}?`}
                            className="posting-input" ></textarea>
                        {formik.errors.post && formik.touched.post && formik.errors.post && <span className='errors'>{formik.errors.post}</span>}
                        <div >
                            {formik.values.file && <PreviewImage post_img={post_img} file={formik.values.file} />}
                            <input id="file" ref={fileRef} name="file" type="file" onChange={(event) =>
                            {
                                formik.setFieldValue("file", event.currentTarget.files[0]);
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
                </div>
                <div className="posting-close-modal" onClick={toggleEditPostModal}>
                    <RxCross2 className="icons" />
                </div>
            </div>
        </div>

    );
}