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

    const [open, setOpen] = useState(false);

    const handleOpen = () =>
    {
        setOpen(!open);
    };

    useEffect(() =>
    {
        axios.get( API + `/user/${user?.email}`)
            .then(res =>
            {
                setCurrentUser(res.data)
            })
    }, [state])


    const handleDeleteFriend = (receiverId) =>
    {
        const sender = {
            first_name: currentUser?.first_name,
            surname: currentUser?.surname,
            email: currentUser?.email,
            id: currentUser?._id,
            profileImg: currentUser?.img,
            receiverId,
        };
        axios.put( API + `/deleteFrn/${receiverId}`,
            sender
        )
            .then(res =>
            {
                console.log(res.data)
                setStates(prev => !prev)
            })

    };

    return (
        <div>
            {
                !!currentUser?.friends?.length &&
                <div>
                    <div>
                        <h2>Friends</h2>
                    </div>

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
                                        <button onClick={() => handleDeleteFriend(friend._id)} className='dlt-friend'>Delete Friend</button>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            }
        </div>
    );
};

export default MyProfileFriends;