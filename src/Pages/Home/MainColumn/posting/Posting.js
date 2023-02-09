import React, { useState } from 'react';
import './Posting.css'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BsThreeDots } from 'react-icons/bs'
import { FaLock, FaRegThumbsDown } from 'react-icons/fa';
import { useFormik } from 'formik';
import { commentAPI, likeAPI, UnlikeAPI } from '../../../../Helpers/ConfigAPI';
import axios from 'axios';

const Posting = ({ profile_pic, first_name, surname, time, desc, post_img, like, comment, share, _id, options, setState }) =>
{
    const [isLoading, setIsLoading] = useState(false)
    const [lik, setLik] = useState(true)
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);

    const handleLike = (_id) =>
    {
        const likes = {
            postId: _id,
            userId: users?._id
        }
        axios.put(likeAPI,
            likes
        )
            .then(res => 
            {
                setState(prev => !prev)
                console.log(res.data)
                setLik(false)
            })
            .catch(err => console.log(err))
    }
    const handleUnLike = (_id) =>
    {
        const likes = {
            postId: _id,
            userId: users?._id
        }

        axios.put(UnlikeAPI,
            likes
        )
            .then(res => 
            {
                setState(prev => !prev)
                console.log(res.data)
                setLik(true)
            })
            .catch(err => console.log(err))
    }

    const formik = useFormik({
        initialValues: {
            text: ""
        },
        onSubmit: values =>
        {
            setIsLoading(true)
            const comments = {
                profile_img: users?.img,
                name: { first_name: users?.first_name, surname: users?.surname },
                text: values.text,
                postId: _id
            }

            axios.put(commentAPI,
                comments
            )
                .then(res =>
                {
                    setState(prev => !prev)
                    formik.resetForm()
                    setIsLoading(false)
                    console.log(res.data)
                })
                .catch(err => console.log(err))

        },
        validate: values =>
        {
            const errors = {};

            if (!/^[a-zA-z.,]+([\s][a-zA-Z.,]+)*$/i.test(values.text)) {
                errors.text = 'Type your comments.'
            }
            console.log(errors)
            return errors;
        }
    })



    return (
        <div className='full-posting'>
            <div className='top'>
                <div className='posting-flex between '>
                    <div className='posting-flex'>
                        <div>
                            <img className='nav-img' src={profile_pic} alt="" />
                        </div>
                        <div className='post-link-div'>
                            <h3><a href="">{first_name} {surname}</a></h3>
                            <p><a href="">{time}</a> . {options === 'Public' ? <GiEarthAsiaOceania /> : <FaLock />} </p>
                        </div>
                    </div>
                    <div className='posting-flex'>
                        <div className='page-icon-div'>
                            <BsThreeDots className='page-icon' />
                        </div>
                        <div className='page-icon-div'>
                            <RxCross2 className='page-icon' />
                        </div>
                    </div>
                </div>
                <div className='desc'>{desc}</div>
            </div>
            <div>
                <img className='posting-img' src={post_img} alt="" />
            </div>
            <div className='react-div'>
                <div className='react-flex post-link-div between'>
                    <div className='react'>
                        <img className='like' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/2048px-Facebook_Like_button.svg.png" alt="" />
                        {/* <img className='like' src="https://www.freeiconspng.com/thumbs/facebook-love-png/blank-heart-love-hd-png-28.png" alt="" /> */}
                        <a href=""><span>{like.length}</span></a>
                    </div>
                    <div>
                        <a href=""><span>{comment.length} Comments</span></a> <a href=""><span>{share} Shares</span></a>
                    </div>
                </div>
                <div className="line"></div>
                <div className='post-top-flex'>
                    {
                        lik ?
                            <button className='post-flex post-button' onClick={() => handleLike(_id)} type='button'>
                                <span className='likes'></span>
                                Like
                            </button>
                            :
                            <button className='post-flex post-button' onClick={() => handleUnLike(_id)} type='button'>
                                <FaRegThumbsDown className='thumb-down' />
                                UnLike
                            </button>
                    }
                    <div className='post-flex'>
                        <span className='comment'></span>
                        <p>Comment</p>
                    </div>
                    <div className='post-flex'>
                        <span className='share'></span>
                        <p>Share</p>
                    </div>
                </div>
                <div className="line"></div>
                {
                    comment.map((cm, i) => (
                        <div key={i} className='comment-flex'>
                            <div><img src={cm.profile_img} className="comment-img" alt="" /></div>
                            <div className='comment-desc post-link-div'>
                                <h3><a href="">{cm.name.first_name} {cm.name.surname}</a></h3>
                                <p>{cm.text}</p>
                            </div>
                        </div>
                    ))
                }
                <form onSubmit={formik.handleSubmit} className='post-top-flex'>
                    <img className='comment-imgs' src={users?.img} alt="" />
                    <input
                        id='text'
                        type="text"
                        className='post-section-input'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.text}
                        placeholder={`Comments, ${users?.first_name} ${users?.surname}?`}
                    />
                    <button type='submit' disabled={isLoading} className='btns'>{isLoading && <div className="loaders"></div>} Send</button>
                </form>
                {/* {formik.errors.text && formik.touched.text && formik.errors.text && <span className='errors c-e'>{formik.errors.text}</span>} */}
            </div>
        </div>
    );
};

export default Posting;