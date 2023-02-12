import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Posting from '../Home/MainColumn/posting/Posting';
import './MyProfilePost.css'

const MyProfilePost = () =>
{
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    const [state,setState] = useState(false)
    const [profilePost, setProfilePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`https://facebook-clone-m-server-side.vercel.app/myPost?user_id=${users?._id}`)
        .then(res =>
        {
            setProfilePost(res.data)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    },[state])
    return (
        <div>
            {
                isLoading ?
                    <div className="profile-loaders"></div>
                    :
                    <div>
                        {
                            profilePost.posts?.map((p, i) => (
                                <Posting
                                    key={i}
                                    setState={setState}
                                    profile_pic={p?.profile_pic}
                                    first_name={p?.name.first_name}
                                    surname={p?.name?.surname}
                                    time={p.time}
                                    desc={p.desc}
                                    post_img={p.post_img}
                                    like={p.like}
                                    comment={p.comment}
                                    share={p.share}
                                    options={p.options}
                                    _id={p._id}
                                />
                            ))
                        }

                    </div>
            }
        </div>
    );
};

export default MyProfilePost;