import React from 'react';
import './MainColumn.css'
import post from '../../../assets/post-plus.png'
import Posting from './posting/Posting';

const MainColumn = () =>
{
    return (
        <div>
            <div className="story-gallery">
                <div className="story story1">
                    <img src={post} alt="" />
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
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHgls_31iJOvA4gISfh57UvgyX_xMub2y7DeS6ovmRpQb-BfiD2N0sHI4Vrc3qRKXbyM&usqp=CAU' alt="" />
                    <p>Andre behalf</p>
                </div>
            </div>
            <div className="post-section">
                <div className='post-top-flex'>
                    <img className='nav-img img' src="https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/310828632_1154997512059494_2357996840331361849_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-h3eoG1yxUmTAXPQH46t085S80hyoFejzlLzSHKgV6KmyOB0BW04ZQHDaqExGtRRdv_IZJMR0tlcFsRGUsZDo&_nc_ohc=U8Pk5-TX6xAAX-RTObz&tn=jmH2Mb2XhKo3nmqh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDzYLKwtUPGKnM-DEobs1Y6GxiEiMEvdHrX6LVR_oa1FA&oe=63D729FD" alt="" />
                    <input placeholder="What's on your mind, Abdullah?" type="text" />
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
            <Posting />
            <Posting />
            <Posting />
            <Posting />
            <Posting />
        </div>
    );
};

export default MainColumn;