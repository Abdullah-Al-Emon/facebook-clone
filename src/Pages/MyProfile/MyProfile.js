import React, { useEffect, useState } from 'react';
import './MyProfile.css'
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaPen } from 'react-icons/fa'
import { BsCaretDownFill } from 'react-icons/bs';
import Posting from '../Home/MainColumn/posting/Posting';
import { useNavigate } from 'react-router-dom';

const MyProfile = () =>
{
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    const [profilePost, setProfilePost] = useState([])
    const navigate = useNavigate()

    useEffect(() =>
    {
        fetch(`http://localhost:4000/post/myPost?user_id=${users?._id}`)
            .then(res => res.json())
            .then(data => setProfilePost(data))
    }, [])

    useEffect(() =>
    {
        if (user === '' || user === null) {
            navigate('/')
        }
    }, [])


    return (
        <div>
            <div className='profile-top'>
                <div className='cover-div'>
                    <img className='cover-img' src='https://thumbs.dreamstime.com/b/dream-forest-5241204.jpg' alt="" />
                </div>
                <div className='profile-div'>
                    <div className='profile-full-div center'>
                        <div>
                            <img className='profile-pic' src={users?.img} alt="" />
                        </div>
                        <div className='profile-title'>
                            <h2>{users?.first_name} {users?.surname}</h2>
                            <p>122 Firends</p>
                        </div>
                    </div>
                    <div className='profile-end'>
                        <button className='button-blue'><AiFillPlusCircle className='icon-img' /> Add to story</button>
                        <button className='button-ash'><FaPen className='icon-pen' /> Edit Profile</button>
                    </div>
                </div>
                <div className='profile-lower'>
                    <div className="line"></div>
                    <div className='extras-div'>
                        <div className='profile-full-div s'>
                            <div className='profile-fast'>Post</div>
                            <div>About</div>
                            <div>Friends</div>
                            <span className='others'>
                                <div>Photos</div>
                                <div>Videos</div>
                                <div className='check'>Check-ins</div>
                            </span>
                            <div className='profile-div-last'>More <BsCaretDownFill className='icons' /></div>
                        </div>
                        <div>
                            <div className='profile-menus'><span className="menus"></span></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='profile-main-div'>
                <div className='profile-fast-div'>
                    <div className="profiles-div-fast">
                        <div className='intro'>
                            Intro
                        </div>
                        <div className='bio-desc'>
                            "আসসালামু আলাইকুম" <br />
                            ❤আল্লাহর গোলাম।❤
                        </div>
                        <div className='bio-div'>Edit bio</div>
                        <div className='profile-full-div bios'>
                            <div><img className='bio-icon-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/jV4o8nAgIEh.png?_nc_eui2=AeHNgSz2afVFfGCxl5Js5iR_C7xezJFSLOkLvF7MkVIs6cnqTa8YQ60gdEIuMd5QYcEe3nVqVhcgoonbFwfE2ChE" alt="" /></div>
                            <div className='new'>Student at <span>Future Commerce College</span></div>
                        </div>
                        <div className='profile-full-div bios'>
                            <div><img className='bio-icon-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png?_nc_eui2=AeEvbLVoMQO732L0PLty8AJeysO07LK9kRPKw7Tssr2RE8GNXP-wLNMWfXrzbTQ4peLIJqOd4WhJi9VxvHo012C2" alt="" /></div>
                            <div className='new'>Lives in <span>Dhaka, Bangladesh</span></div>
                        </div>
                        <div className='profile-full-div bios'>
                            <div><img className='bio-icon-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png?_nc_eui2=AeGIUKkwvEFTOQLfgO-0V9zuyuB9xaeJwC_K4H3Fp4nAL8zmy1f9NoBiTh62cdKBryGx8XDzD0oIbV9t_VnzUdMo" alt="" /></div>
                            <div className='new'>From <span>Khilgaon</span></div>
                        </div>
                        <div className='profile-full-div bios'>
                            <div><img className='bio-icon-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/OyWm6cSjuMt.png?_nc_eui2=AeFLEA1mQBfR6ZgvAKuCtwcNocTnxQvULLKhxOfFC9QssqBaVjrCpC8vKXGE3yp7kEWh-wtfoxXOkimq2UO-a8mc" alt="" /></div>
                            <div className='new'>Followed by <span>230 people</span></div>
                        </div>
                        <div className='bio-div'>Edit details</div>
                    </div>
                </div>
                <div className='profile-last-div'>
                    <div className="post-section">
                        <div className='post-top-flex'>
                            <img className='nav-img img' src={users?.img} alt="" />
                            <input className='post-section-input' placeholder={`What's on your mind, ${users?.first_name} ${users?.surname}?`} type="text" />
                            {/* {postingModal && (<PostingModal togglePostingModal={togglePostingModal} setPostingModal={setPostingModal} postingModal={postingModal} />)} */}
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
                                <span className='flag'></span>
                                <p>Life event</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid'>
                        <div className='profile-post'>
                            <p>Posts</p>
                            <div>
                                <button><span className='filter'></span> Filters</button>
                                <button><span className='four'></span> Manage posts</button>
                            </div>
                        </div>
                        <div className="line"></div>
                        <div className='grids-flex'>
                            <div className='grids-flex-fast'><span className='normal'></span> List view</div>
                            <div><span className="grids-icon"></span> Grid view</div>
                        </div>
                    </div>
                    <div>
                        {
                            profilePost.posts?.map(p => (
                                <Posting
                                    key={p.id}
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
                </div>
            </div>
        </div>
    );
};

export default MyProfile;