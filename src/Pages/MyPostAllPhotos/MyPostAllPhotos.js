import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/StateManage';
import { API } from '../../Helpers/ConfigAPI';
import './MyPostAllPhotos.css'

const MyPostAllPhotos = () =>
{
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    // const [state,setState] = useState(false)
    const { state, setStates } = useContext(Context)
    const [profilePostPhotos, setProfilePostPhotos] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() =>
    {
        axios.get(API + `/myPost?user_id=${users?._id}`)
            .then(res =>
            {
                setProfilePostPhotos(res.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }, [state])
    console.log(profilePostPhotos)
    return (

        <div>
            {
                isLoading ?
                    <div className="profile-loaders"></div>
                    :
                    <div className='photos-flex'>
                        {
                            profilePostPhotos.posts?.slice(0).reverse().map((p, i) => (
                                p.post_img &&
                                <div className='photos-div'>
                                    <img className='photos-img' src={p.post_img} alt="" />
                                </div>
                            ))
                        }

                    </div>
            }
        </div>
    );
};

export default MyPostAllPhotos;