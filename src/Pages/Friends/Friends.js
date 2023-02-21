import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Friends.css'

const Friends = () =>
{
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    const [friend, setFriend] = useState([])

    useEffect(() =>
    {
        axios.get('http://localhost:5000/friend')
            .then(res => setFriend(res.data))
    }, [])

    const handleAddFriend = (_id) => {
        console.log(_id)
    }

    return (
        <div className='m-column'>
            <div>
                <h2 className='friend-title'>Friend Request</h2>
            </div>
            <div className='friend'>
                {
                    friend.friend?.map((frnd, i) => (
                        frnd?._id === users?._id ?
                            ""
                            :
                            <div key={i} className='friend-div'>
                                <div>
                                    <img src={frnd?.img} alt="" />
                                </div>
                                <div className='friends-desc'>
                                    <h3>{frnd?.first_name} {frnd?.surname}</h3>
                                    <div>
                                        <button onClick={() => handleAddFriend(frnd?._id)} className='confirm-btn'>Add Friend</button>
                                    </div>
                                    <div>
                                        <button className='delete-btn'>Remove</button>
                                    </div>
                                </div>
                            </div>
                    ))
                }
                {/* <div className='friend-div'>
                    <div>
                        <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e" alt="" />
                    </div>
                    <div className='friends-desc'>
                        <h3>Abdul Rahman</h3>
                        <div>
                            <button className='confirm-btn'>Confirm</button>
                        </div>
                        <div>
                            <button className='delete-btn'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='friend-div'>
                    <div>
                        <img src="https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" alt="" />
                    </div>
                    <div className='friends-desc'>
                        <h3>Kashem Rahman</h3>
                        <div>
                            <button className='confirm-btn'>Confirm</button>
                        </div>
                        <div>
                            <button className='delete-btn'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='friend-div'>
                    <div>
                        <img src="https://images.unsplash.com/photo-1600804889194-e6fbf08ddb39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGFuZHNvbWUlMjBtYW58ZW58MHx8MHx8&w=1000&q=80" alt="" />
                    </div>
                    <div className='friends-desc'>
                        <h3>Ariyan Rahman</h3>
                        <div>
                            <button className='confirm-btn'>Confirm</button>
                        </div>
                        <div>
                            <button className='delete-btn'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='friend-div'>
                    <div>
                        <img src="https://st4.depositphotos.com/2760050/24301/i/600/depositphotos_243011410-stock-photo-man-with-bristle-on-calm.jpg" alt="" />
                    </div>
                    <div className='friends-desc'>
                        <h3>Arfan Hasib</h3>
                        <div>
                            <button className='confirm-btn'>Confirm</button>
                        </div>
                        <div>
                            <button className='delete-btn'>Delete</button>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Friends;