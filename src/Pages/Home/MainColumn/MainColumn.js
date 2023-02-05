import React, { useEffect, useState } from 'react';
import PostingModal from '../../../Components/PostingModal/PostingModal';
import { MainPostAPI, postAPI } from '../../../Helpers/ConfigAPI';
import './MainColumn.css'
import Posting from './posting/Posting';

const MainColumn = () =>
{
    const [postingModal, setPostingModal] = useState(false);
    const [post, setPost] = useState([])
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);

    const togglePostingModal = () =>
    {
        setPostingModal(!postingModal);
    };

    if (postingModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    useEffect(() => {
        fetch(MainPostAPI)
        .then(res => res.json())
        .then(data => setPost(data))
    },[])


    return (
        <div>
            {/* <Loader/> */}
            <div className="story-gallery">
                <div className="story story1" style={{ backgroundImage: `linear-gradient(transparent, rgba(0,0,0,0.5)), url(${users.img})` }}>
                    <img src='https://i.ibb.co/rwZdyP9/post-plus.png' alt="" />
                    <p>Create Story</p>
                </div>
                <div className="story story2">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoC4Bu0O95pRBeEy6MW4tjgNBVy4ab5YHPaDV9B0QybG9SRfCNqsleqPZN8RgCTwZYdY&usqp=CAU' alt="" />
                    <p>Jon Rackson</p>
                </div>
                <div className="story story3">
                    <img src='https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000' alt="" />
                    <p>Golf hebit</p>
                </div>
                <div className="story story4">
                    <img src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80' alt="" />
                    <p>Elei greto</p>
                </div>
                <div className="story story5">
                    <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' alt="" />
                    <p>Andre behalf</p>
                </div>
            </div>
            <div className="post-section">
                <div className='post-top-flex'>
                    <img className='nav-img img' src={users.img} alt="" />
                    <input className='post-section-input' onClick={togglePostingModal} placeholder={`What's on your mind, ${users.first_name} ${users.surname}?`} type="text" />
                    {postingModal && (<PostingModal togglePostingModal={togglePostingModal} setPostingModal={setPostingModal} postingModal={postingModal} />)}
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
            {
                post?.map(p => (
                    <Posting
                        key={p.id}
                        profile_pic={p?.profile_pic}
                        first_name={p?.name.first_name}
                        surname={p?.name?.surname}
                        time={p.time}
                        desc={p.desc}
                        post_img={p.post_img}
                        like={p.like.length}
                        comment={p.comment.length}
                        share={p.share}
                        _id={p._id}
                    />
                ))
            }
        </div>
    );
};

export default MainColumn;