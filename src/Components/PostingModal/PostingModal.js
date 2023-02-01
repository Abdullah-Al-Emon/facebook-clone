import { Formik } from "formik";
import "./PostingModal.css";
import { RxCross2 } from 'react-icons/rx'
import { GiEarthAsiaOceania } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { useRef } from "react";
import PreviewImage from "../PreviewImage/PreviewImage";
import { format } from "date-fns";


export default function PostingModal({ togglePostingModal, setPostingModal, postingModal })
{
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    const fileRef = useRef(null)
    const profile_pic = users.img;
    const first_name = users.first_name;
    const surname = users.surname;

    const todayDate = new Date()
    const date = format(todayDate, 'PPpp')
    const like = Math.floor(Math.random() * 20);


    return (

        <div className="posting-modal">
            <div onClick={togglePostingModal} className="posting-overlay"></div>
            <div className="posting-modal-content">
                <div>
                    <h2>Create Post</h2>
                </div>
                <div className="line"></div>
                <div className='posting-flex between '>
                    <div className='posting-flex'>
                        <div>
                            <img className='nav-img' src={users.img} alt="" />
                        </div>
                        <div className="">
                            <h3><a href="">{users.first_name} {users.surname}</a></h3>
                            <div className="c-post-public"><GiEarthAsiaOceania /> Public <AiFillCaretDown /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <Formik
                        initialValues={{ post: '', file: null }}
                        onSubmit={(values) =>
                        {
                            const image = values.file;
                            const fromData = new FormData();
                            fromData.append('file', image)
                            fromData.append('upload_preset', 'imagexlm')
                            fromData.append('folder', 'First')

                            fetch(`https://api.cloudinary.com/v1_1/drh68zyt1/image/upload`, {
                                method: 'POST',
                                body: fromData
                            })
                                .then(res => res.json())
                                .then(imgData =>
                                {
                                    console.log(imgData.secure_url)
                                    const post = {
                                        profile_pic: profile_pic,
                                        name: {first_name : first_name, surname : surname},
                                        time: date,
                                        desc: values.post,
                                        post_img: imgData.secure_url,
                                        like: like,
                                        comment: "1",
                                        share: "1",
                                    }
                                    fetch('https://63b5737158084a7af394adfc.mockapi.io/post', {
                                        method: 'POST',
                                        headers: {
                                            'content-type': 'application/json',
                                        },
                                        body: JSON.stringify(post)
                                    })
                                        .then(res => res.json())
                                        .then(result =>
                                        {
                                            setPostingModal(!postingModal)
                                            console.log(result)
                                        })

                                })
                        }}
                        validate={(values) =>
                        {
                            const errors = {};

                            if (!/^[a-zA-z.,]+([\s][a-zA-Z.,]+)*$/i.test(values.post)) {
                                errors.post = 'Type Your mind?'
                            }
                            console.log(errors)
                            return errors;
                        }}
                    >
                        {({ values, handleSubmit, setFieldValue, handleChange, errors, touched, handleBlur }) =>
                        {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <textarea
                                        name="post"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder={`What's on your mind, ${users.first_name} ${users.surname}?`}
                                        className="posting-input" ></textarea>
                                    {errors.post && touched.post && errors.post && <span className='errors'>{errors.post}</span>}
                                    <div >
                                        {values.file && <PreviewImage file={values.file} />}
                                        <input id="file" ref={fileRef} name="file" type="file" onChange={(event) =>
                                        {
                                            setFieldValue("file", event.currentTarget.files[0]);
                                        }} className="form-control" />
                                        <button type="button" className="form-group" onClick={() =>
                                        {
                                            fileRef.current.click()
                                        }}>Upload photo</button>
                                    </div>
                                    <button type="submit" className="posting-button">Post</button>
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