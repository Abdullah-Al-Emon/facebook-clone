import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Context/StateManage';
import { API } from '../../Helpers/ConfigAPI';

const CancelRequest = () =>
{
    let u = sessionStorage.getItem('user');
    let user = JSON.parse(u);
    const [currentUser, setCurrentUser] = useState([]);
    const { state, setStates } = useContext(Context)

    useEffect(() =>
    {
        axios.get( API + `/user/${user?.email}`)
            .then(res =>
            {
                setCurrentUser(res.data)
            })
    }, [state])

    const handleCancleRequest = (receiverId) => {
        const sender = {
          name: currentUser?.name,
          email: currentUser?.email,
          id: currentUser?._id,
          profileImg: currentUser?.profileImg,
          receiverId,
        };
        axios.put( API + `/cancelSentRequest/${receiverId}`,
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
            {currentUser?.following?.length ? (
                <div>
                    <div>
                        <h2 className='friend-title'>Sent Friend Request</h2>
                    </div>
                    <div className='friend'>
                        <>
                            {currentUser?.following
                                ?.slice(0)
                                ?.reverse()
                                ?.map((friend, i) => (
                                    <div key={i} className='friend-div'>
                                        <div>
                                            <img className='s-img' src={friend?.profileImg} alt="" />
                                        </div>
                                        <div className='friends-desc'>
                                            <h3>{friend?.first_name} {friend?.surname}</h3>
                                            <div>
                                                <button onClick={() =>
                                                {
                                                    handleCancleRequest(friend?.id)
                                                }} className='delete-btn'>Cancel Sent Request</button>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                        </>
                    </div>
                </div>
            ) : (
                <p className="">No peoples available</p>
            )}
        </div >
    );
};

export default CancelRequest;