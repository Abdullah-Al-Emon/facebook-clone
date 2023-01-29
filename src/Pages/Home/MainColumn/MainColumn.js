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
                    <img src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg' alt="" />
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
            <Posting
                profilepic={'https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/276169948_3058595251136498_3513931327847645840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSYn1n1yQv-lc6NoxNHZa4hpBqW1o072WGkGpbWjTvZTde1qlMcPsGK29vrnrPWAq_AkGfiWO3BKiLHdiL_g5Y&_nc_ohc=IOlFa9yv-WUAX_jkxtN&_nc_ht=scontent.fdac11-1.fna&oh=00_AfBy8an5WoMVi99ORFoIthMoqNEGqZJcYoWLzOeFWkm8bA&oe=63DA65AE'}
                name={'Kazi Sojib'}
                time={'December 9, 2022'}
                des={'Nice Place wonderfull.'}
                postimg={'https://www.bakingbusiness.com/ext/resources/2021/6/SunSetOverWheatField_Lead.jpg?t=1623416999&width=1080'}
                like={'12'}
                comment={'2'}
                share={'0'}
            />
            <Posting
                profilepic={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxoC4Bu0O95pRBeEy6MW4tjgNBVy4ab5YHPaDV9B0QybG9SRfCNqsleqPZN8RgCTwZYdY&usqp=CAU'}
                name={'Jon Rackson'}
                time={'December 13, 2022'}
                des={'Nice Place wonderfull.'}
                postimg={'https://cdn.pixabay.com/photo/2018/08/23/07/35/thunderstorm-3625405__480.jpg'}
                like={'12'}
                comment={'2'}
                share={'0'}
            />
            <Posting
                profilepic={'https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-66609.jpg?w=2000'}
                name={'Golf hebit'}
                time={'December 20, 2022'}
                des={'Nice Place wonderfull.'}
                postimg={'http://newsinvasion24.com/wp-content/uploads/2022/05/2-39.jpg'}
                like={'12'}
                comment={'2'}
                share={'0'}
            />
            <Posting
                profilepic={'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
                name={'Elei greto'}
                time={'December 9, 2022'}
                des={'Nice Place wonderfull.'}
                postimg={'http://www.nasa.gov/sites/default/files/styles/full_width/public/thumbnails/image/smap-weather.jpg?itok=NPw6Fmwy'}
                like={'12'}
                comment={'2'}
                share={'0'}
            />
            <Posting
                profilepic={'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg'}
                name={'Andre behalf'}
                time={'December 9, 2022'}
                des={'Nice Place wonderfull.'}
                postimg={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvZPskNDqA3pssJg9sLzSc9IoS-EP2Ya_Wpcc8JHN-O8P9qm3aqsA2ooSTu-TV6-QEW9s&usqp=CAU'}
                like={'12'}
                comment={'2'}
                share={'0'}
            />
        </div>
    );
};

export default MainColumn;