import React, { useState } from 'react';
import './Posting.css'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BsThreeDots } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa';
import { useFormik } from 'formik';
import { commentAPI, likeAPI } from '../../../../Helpers/ConfigAPI';

const Posting = ({ profile_pic, first_name, surname, time, desc, post_img, like, comment, share, _id, options }) =>
{

    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    console.log(users)
    const handleLike = (_id) =>
    {
        const likes = {
            postId: _id,
        }
        fetch(likeAPI, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(likes)
        })
            .then(res => res.json())
            .then(data =>
            {
                window.location.reload(true)
                console.log(data)
            })

    }
    console.log(comment)

    const formik = useFormik({
        initialValues: {
            text: ""
        },
        onSubmit: values =>
        {
            // const comment = {
            //     profile_img: users.img,
            //     name: { first_name: first_name, surname: surname },
            //     text: values.text,
            // }
            fetch(commentAPI, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({
                    profile_img: users.img,
                    name: { first_name: users.first_name, surname: users.surname },
                    text: values.text,
                    postId: _id
                })
            })
                .then(res => res.json())
                .then(data =>
                {
                    window.location.reload(true)
                    console.log(data)
                })

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
                        <div>
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
                <div className='react-flex between'>
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
                    <button className='post-flex post-button' onClick={() => handleLike(_id)} type='button'>
                        <span className='likes'></span>
                        Like
                    </button>
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
                    comment.map(cm => (
                        <div className='comment-flex'>
                            <div><img src={cm.profile_img} className="comment-img" alt="" /></div>
                            <div className='comment-desc'>
                                <h3>{cm.name.first_name} {cm.name.surname}</h3>
                                <p>{cm.text}</p>
                            </div>
                        </div>
                    ))
                }
                <form onSubmit={formik.handleSubmit} className='post-top-flex'>
                    <img className='nav-img' src={users.img} alt="" />
                    <input
                        id='text'
                        className='post-section-input'
                        onChange={formik.handleChange}
                        value={formik.values.text}
                        placeholder={`Comments, ${users.first_name} ${users.surname}?`}
                        type="text" />
                    <button type='submit' className='btns'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Posting;