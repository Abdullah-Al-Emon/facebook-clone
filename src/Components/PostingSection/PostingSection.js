import React, { useState } from 'react';
import PostingModal from '../PostingModal/PostingModal';

const PostingSection = ({setState}) =>
{
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    const [postingModal, setPostingModal] = useState(false);
    const togglePostingModal = () =>
    {
        setPostingModal(!postingModal);
    };

    if (postingModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <div>
            <div className="post-section">
                <div className='post-top-flex'>
                    <img className='nav-img img' src={users?.img} alt="" />
                    <input className='post-section-input' onClick={togglePostingModal} placeholder={`What's on your mind, ${users?.first_name} ${users?.surname}?`} type="text" />
                    {postingModal && (<PostingModal setState={setState} togglePostingModal={togglePostingModal} setPostingModal={setPostingModal} postingModal={postingModal} />)}
                </div>
                <div className="line"></div>
                <div className='post-top-flex'>
                    <div className='post-flex'>
                        <span className='video'></span>
                        <p>Live Video</p>
                    </div>
                    <div className='post-flex'>
                        <span className='photo'></span>
                        <p>Photo/video</p>
                    </div>
                    <div className='post-flex'>
                        <span className='feeling'></span>
                        <p>Feeling/activity</p>
                    </div>
                </div>
            </div>
            <div className="create-room">
                <div className="room-flex">
                    <span className='room'></span>
                    <p>Create room</p>
                </div>
            </div>
        </div>
    );
};

export default PostingSection;