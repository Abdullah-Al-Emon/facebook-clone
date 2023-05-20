import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { Context } from '../../Context/StateManage';
import { API } from '../../Helpers/ConfigAPI';
import './MyProfileFriends.css'

const MyProfileFriends = () =>
{
    let u = sessionStorage.getItem('user');
    let user = JSON.parse(u);
    const [currentUser, setCurrentUser] = useState([]);
    const { state, setStates } = useContext(Context)
    const [isLoading, setIsLoading] = useState(true)
    const [loading, setLoading] = useState(false)

    useEffect(() =>
    {
        axios.get(API + `/user/${user?.email}`)
            .then(res =>
            {
                setCurrentUser(res.data)
                setIsLoading(false)
            })
    }, [state])


    const handleDeleteFriend = (receiverId) =>
    {
        setLoading(true)

        const sender = {
            first_name: currentUser?.first_name,
            surname: currentUser?.surname,
            email: currentUser?.email,
            id: currentUser?._id,
            profileImg: currentUser?.img,
            receiverId,
        };
        axios.put(API + `/deleteFrn/${receiverId}`,
            sender
        )
            .then(res =>
            {
                console.log(res.data)
                setStates(prev => !prev)
                setLoading(false)
            })

    };

    return (
        <div>
            <div>
                <div>
                    <h2>Friends</h2>
                </div>

                <div>
                    {
                        isLoading ?
                            <div className="profile-loaders"></div>
                            :
                            <>
                                {
                                    currentUser?.friends
                                        ?.slice(0)
                                        ?.reverse()
                                        ?.map((friend, i) => (
                                            <div className='frnd-div'>
                                                <div className='img-title'>
                                                    <div>
                                                        <img src={friend.img} alt="" />
                                                    </div>
                                                    <div>
                                                        <h3>
                                                            {friend.first_name} {friend.surname}
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div>
                                                    <button disabled={loading} onClick={() => handleDeleteFriend(friend._id)} className='dlt-friend'> {loading && <div className="loaders"></div>} Delete Friend</button>
                                                </div>
                                            </div>
                                        ))
                                }
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default MyProfileFriends;