import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/StateManage';
import { API } from '../../Helpers/ConfigAPI';
import Posting from '../Home/MainColumn/posting/Posting';
import Undo from '../Home/MainColumn/Undo/Undo';
import './MyProfilePost.css'

const MyProfilePost = () =>
{
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    // const [state,setState] = useState(false)
    const { state, setStates } = useContext(Context)
    const [profilePost, setProfilePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>
    {
        axios.get(API + `/myPost?user_id=${users?._id}`)
            .then(res =>
            {
                setProfilePost(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [state])
    return (
        <div>
            {
                isLoading ?
                    <div className="profile-loaders"></div>
                    :
                    <div>
                        {
                            profilePost.posts?.map((p, i) => (
                                p?.inVisibleUserId?.includes(users?._id) ?
                                    <Undo 
                                    key={i} 
                                    _id={p._id}
                                    user_Id={users?._id}
                                    setState={setStates}
                                    />
                                    :
                                    <Posting
                                        key={i}
                                        setState={setStates}
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
                                        user_Id={p.user_id}
                                    />
                            ))
                        }

                    </div>
            }
        </div>
    );
};

export default MyProfilePost;