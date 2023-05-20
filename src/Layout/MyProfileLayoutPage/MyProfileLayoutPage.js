import React, { useContext, useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai'
import { FaPen } from 'react-icons/fa'
import { BsCaretDownFill } from 'react-icons/bs';
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import './MyProfileLayoutPage.css'
import EditModal from '../../Components/EditModal/EditModal';
import PostingSection from '../../Components/PostingSection/PostingSection';
import { Context } from '../../Context/StateManage';
import useTitle from '../../Hooks/useTitle';
import axios from 'axios';
import { API } from '../../Helpers/ConfigAPI';

const MyProfileLayoutPage = () =>
{
    const [editModal, setEditModal] = useState(false);
    const { state, setStates } = useContext(Context)
    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    let user = sessionStorage.getItem('user');
    let users = JSON.parse(user);
    useTitle(`${users?.first_name} ${users?.surname} |`, '')

    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() =>
    {
        axios.get( API + `/user/${users?.email}`)
            .then(res =>
            {
                setCurrentUser(res.data)
            })
    }, [state])

    useEffect(() =>
    {
        if (user === '' || user === null) {
            navigate('/')
        }
    }, [state])

    const toggleEditModal = () =>
    {
        setEditModal(!editModal);
    };

    if (editModal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    const handleOpen = () =>
    {
        setOpen(!open);
    };


    return (
        <div>
            <div className='profile-top'>
                <div className='cover-div'>
                    {
                        users?.cover_Img ?
                            <img className='cover-img' src={users?.cover_Img} alt="" />
                            :
                            <img className='cover-img' src='https://res.cloudinary.com/drh68zyt1/image/upload/v1676712857/imagexlm/r3otvyz9y6bxcd99bzyo.png' alt="" />
                    }
                </div>
                <div className='profile-div'>
                    <div className='profile-full-div center'>
                        <div>
                            <img className='profile-pic' src={users?.img} alt="" />
                        </div>
                        <div className='profile-title'>
                            <h2>{users?.first_name} {users?.surname}</h2>
                            <p>{currentUser?.friends?.length} Friends</p>
                        </div>
                    </div>
                    <div className='profile-end'>
                        <button className='button-blue'><AiFillPlusCircle className='icon-img' /> Add to story</button>
                        <button onClick={toggleEditModal} className='button-ash'><FaPen className='icon-pen' /> Edit Profile</button>
                        {editModal && <EditModal setEditModal={setEditModal} editModal={editModal} toggleEditModal={toggleEditModal} />}
                    </div>
                </div>
                <div className='profile-lower'>
                    <div className="line"></div>
                    <div className='extras-div'>
                        <nav className='profile-full-div s'>
                            <NavLink to={'/myProfile'}><div>Post</div></NavLink>
                            <NavLink to='/myProfile/photo' ><div>Photos</div></NavLink>
                            <NavLink to={'/myProfile/friends'} ><div>Friends</div></NavLink>
                            <span className='others'>
                                <NavLink to={'/myProfile/about'}><div>About</div></NavLink>
                                <NavLink to='/myProfile/video' ><div>Videos</div></NavLink>
                                <NavLink to='/myProfile/check' ><div className='check'>Check-ins</div></NavLink>
                            </span>
                            <div className='profile-div-last'>More <BsCaretDownFill className='icons' /></div>
                        </nav>
                        <div>
                            <div onClick={handleOpen} className='profile-menus'><span className="menus"></span>
                                {open && <div className='edit-menu'>
                                    <Link to='/home' className='btn-my'>Home</Link>
                                    <Link to='/myProfile/cancelSentRequest' className='btn-my'>Cancel Friend Request</Link>
                                </div>}
                            </div>
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
                            <div className='new'>Student at {
                                users?.student ?
                                    <span>{users?.student}</span>
                                    :
                                    <span>Click Edit Profile set your School/College</span>
                            }
                            </div>
                        </div>
                        <div className='profile-full-div bios'>
                            <div><img className='bio-icon-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/VMZOiSIJIwn.png?_nc_eui2=AeEvbLVoMQO732L0PLty8AJeysO07LK9kRPKw7Tssr2RE8GNXP-wLNMWfXrzbTQ4peLIJqOd4WhJi9VxvHo012C2" alt="" /></div>
                            <div className='new'>Lives in {
                                users?.lives_In ?
                                    <span>{users?.lives_In}</span>
                                    :
                                    <span>Click Edit Profile set your Lives In</span>
                            }
                            </div>
                        </div>
                        <div className='profile-full-div bios'>
                            <div><img className='bio-icon-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/-e1Al38ZrZL.png?_nc_eui2=AeGIUKkwvEFTOQLfgO-0V9zuyuB9xaeJwC_K4H3Fp4nAL8zmy1f9NoBiTh62cdKBryGx8XDzD0oIbV9t_VnzUdMo" alt="" /></div>
                            <div className='new'>From {
                                users?.from ?
                                    <span>{users?.from}</span>
                                    :
                                    <span>Click Edit Profile set your From Adress</span>
                            }
                            </div>
                        </div>
                        {/* <div className='profile-full-div bios'>
                            <div><img className='bio-icon-img' src="https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/OyWm6cSjuMt.png?_nc_eui2=AeFLEA1mQBfR6ZgvAKuCtwcNocTnxQvULLKhxOfFC9QssqBaVjrCpC8vKXGE3yp7kEWh-wtfoxXOkimq2UO-a8mc" alt="" /></div>
                            <div className='new'>Followed by <span>230 people</span></div>
                        </div> */}
                        <div className='bio-div'>Edit details</div>
                    </div>
                </div>
                <div className='profile-last-div'>
                    <PostingSection setState={setStates} />
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
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MyProfileLayoutPage;