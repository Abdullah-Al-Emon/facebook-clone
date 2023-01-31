import { Formik } from "formik";
import "./PostingModal.css";
import { RxCross2 } from 'react-icons/rx'
import { GiEarthAsiaOceania } from "react-icons/gi";
import { AiFillCaretDown } from "react-icons/ai";
import { useRef } from "react";


export default function PostingModal({ togglePostingModal, setPostingModal, postingModal })
{

    // const formik = useFormik({
    //     initialValues: {
    //         post: '',
    //         image: ''
    //     },
    //     onSubmit: values =>
    //     {
    //         // setPostingModal(!postingModal)
    //         // formik.resetForm()
    //         // console.log(values)
    //         alert(JSON.stringify(values, null, 2));
    //     },
    //     validate: values =>
    //     {

    //     }
    // });

    const fileRef = useRef(null)

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
                            <img className='nav-img' src='https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/310828632_1154997512059494_2357996840331361849_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-h3eoG1yxUmTAXPQH46t085S80hyoFejzlLzSHKgV6KmyOB0BW04ZQHDaqExGtRRdv_IZJMR0tlcFsRGUsZDo&_nc_ohc=U8Pk5-TX6xAAX-RTObz&tn=jmH2Mb2XhKo3nmqh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDzYLKwtUPGKnM-DEobs1Y6GxiEiMEvdHrX6LVR_oa1FA&oe=63D729FD' alt="" />
                        </div>
                        <div className="">
                            <h3><a href="">Abdullah Al Emon</a></h3>
                            <div className="c-post-public"><GiEarthAsiaOceania /> Public <AiFillCaretDown /></div>
                        </div>
                    </div>
                </div>
                <div>
                    <Formik
                        initialValues={{ post: '', file: '' }}
                        onSubmit={(values) =>
                        {
                            console.log(values)
                            // alert(
                            //     JSON.stringify(
                            //         {
                            //             post: values.post,
                            //             fileName: values.file.name,
                            //             type: values.file.type,
                            //             size: `${values.file.size} bytes`
                            //         },
                            //         null,
                            //         2
                            //     )
                            // );
                        }}>
                        {({ values, handleSubmit, setFieldValue, handleChange }) =>
                        {
                            return (
                                <form onSubmit={handleSubmit}>
                                    <textarea
                                        name="post"
                                        onChange={handleChange}
                                        placeholder="What's on your mind, Abdullah?"
                                        className="posting-input" ></textarea>
                                    <div className="form-group">
                                        <input id="file" name="file" type="file" onChange={(event) =>
                                        {
                                            setFieldValue("file", event.currentTarget.files[0]);
                                        }} className="form-control" />
                                        {/* <Thumb file={values.file} /> */}
                                    </div>
                                    <button type="submit" className="posting-button">Post</button>
                                </form>
                            );
                        }}
                    </Formik>
                    {/* <form onSubmit={formik.handleSubmit}>
                        <textarea
                            name="post"
                            onChange={formik.handleChange}
                            placeholder="What's on your mind, Abdullah?"
                            className="posting-input" ></textarea>
                        <div>
                            <input type="file"
                                onChange={(event) =>
                                {
                                    setFieldValue("file", event.currentTarget.files[0])
                                }}
                                className="image-input" name="image" id="" />
                        </div>
                        <button className="posting-button" type="submit">Post</button>
                    </form> */}
                </div>
                <div className="posting-close-modal" onClick={togglePostingModal}>
                    <RxCross2 className="icons" />
                </div>
            </div>
        </div>

    );
}