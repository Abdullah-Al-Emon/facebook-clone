import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../../Context/StateManage';
import { API } from '../../../Helpers/ConfigAPI';

const AllRequest = () =>
{
    let u = sessionStorage.getItem('user');
    let user = JSON.parse(u);
    const [currentUser, setCurrentUser] = useState([]);
    const { state, setStates } = useContext(Context)

    useEffect(() =>
    {
        axios.get( API `/user/${user?.email}`)
            .then(res =>
            {
                setCurrentUser(res.data)
            })
    }, [state])

    // console.log(currentUser.followers)

    const handleAcceptRequest = (receiverId) =>
    {
        const sender = {
            first_name: currentUser?.first_name,
            surname: currentUser?.surname,
            email: currentUser?.email,
            id: currentUser?._id,
            profileImg: currentUser?.img,
            receiverId,
        };
        axios.put( API + `/accept/${receiverId}`,
            sender
        )
            .then(res =>
            {
                console.log(res.data)
                setStates(prev => !prev)
            })

    };
    const handleDeleteRequest = (receiverId) =>
    {
        const sender = {
            first_name: currentUser?.first_name,
            surname: currentUser?.surname,
            email: currentUser?.email,
            id: currentUser?._id,
            profileImg: currentUser?.img,
            receiverId,
        };
        axios.put( API + `/delete/${receiverId}`,
            sender
        )
            .then(res =>
            {
                console.log(res.data)
                setStates(prev => !prev)
            })
    };

    return (
        <div className=''>
            {currentUser?.followers?.length ? (
                <div>
                    <div>
                        <h2 className='friend-title'>Friend Request</h2>
                    </div>
                    <div className='friend'>
                        <>
                            {currentUser?.followers
                                ?.slice(0)
                                ?.reverse()
                                ?.map((friend, i) => (
                                    <div key={i} className='friend-div'>
                                        <div>
                                            <img src={friend?.profileImg} alt="" />
                                        </div>
                                        <div className='friends-desc'>
                                            <h3>{friend?.first_name} {friend?.surname}</h3>
                                            < div >
                                                <button onClick={() => handleAcceptRequest(friend?.id)} className='confirm-btn'>Accept Request</button>
                                            </div >
                                            <div>
                                                <button onClick={() =>
                                                {
                                                    handleDeleteRequest(friend?.id)
                                                }} className='delete-btn'>Delete Request</button>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                        </>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div >
    );
};

export default AllRequest;