import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostingSection from '../../../Components/PostingSection/PostingSection';
import { postAPI } from '../../../Helpers/ConfigAPI';
import './MainColumn.css'
import Posting from './posting/Posting';

const MainColumn = () =>
{
    const [state, setState] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [storyData, setStoryData] = useState([])
    const [post, setPost] = useState([])
    const [visible, setVisible] = useState(5)

    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);

    const loadMore = () =>
    {
        setVisible(visible + 5)
    }

    useEffect(() =>
    {
        axios.get(postAPI)
            .then(res =>
            {
                setIsLoading(false)
                setPost(res.data)
            })
            .catch(err => console.log(err))

        axios.get('JSON/story.json')
            .then(res => setStoryData(res.data))
            .catch(err => console.log(err))
    }, [state])


    return (
        <div className='m-column'>
            {/* <Loader/> */}
            <div className="story-gallery">
                <div
                    className="story story1"
                    style={{ backgroundImage: `linear-gradient(transparent, rgba(0,0,0,0.5)), url(${users?.img})` }}
                >
                    <img src='https://i.ibb.co/rwZdyP9/post-plus.png' alt="" />
                    <p>Create Story</p>
                </div>
                {
                    storyData?.map((st, i) => (
                        <div
                            key={i} className="story"
                            style={{ backgroundImage: `linear-gradient(transparent, rgba(0,0,0,0.5)), url(${st?.story_img})` }}
                        >
                            <img src={st.profile_img} alt="" />
                            <p>{st.name}</p>
                        </div>
                    ))
                }
            </div>
            <PostingSection setState={setState} />
            <div>
                {
                    isLoading ?
                        <div className="profile-loaders"></div>
                        :
                        <div>
                            {
                                post.posts?.slice(0, visible).map((p, i) => (
                                    <Posting
                                        key={i}
                                        setState={setState}
                                        profile_pic={p?.profile_pic}
                                        first_name={p?.name.first_name}
                                        surname={p?.name?.surname}
                                        time={p.time}
                                        desc={p.desc}
                                        post_img={p.post_img}
                                        like={p.like}
                                        comment={p.comment}
                                        share={p.share}
                                        options={p.options}
                                        _id={p._id}
                                    />
                                ))
                            }

                        </div>
                }
            </div>
            {
                visible < post?.posts?.length && (
                    <div className='see-more'>
                        <button className='btn-more' onClick={loadMore}>See More</button>
                    </div>
                )
            }
        </div>
    );
};

export default MainColumn;