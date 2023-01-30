import React from 'react';
import './Navbar.css'
import { AiFillHome, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { BsFillHandbagFill, BsSearch } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { GrGamepad } from 'react-icons/gr'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'



const Navbar = () =>
{
    return (
        <div>
            <div className='navbar'>
                <div className='nav-flex'>
                    <img className='nav-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                    <div className='search-div'><BsSearch className='search-icon' /></div>
                    <input placeholder='Search Facebook' type="text" />
                </div>
                <div className='nav-flex'>
                    <div className='nav-flex middle-nav'>
                        <div className='icon-div'><AiFillHome className='icon color' /></div>
                        <div className='icon-div'><FaUserFriends className='icon' /></div>
                        <div className='icon-div'><BsFillHandbagFill className='icon' /></div>
                        <div className='icon-div'><FaUsers className='icon' /></div>
                        <div className='icon-div game-icon'><GrGamepad className='icon' /></div>
                    </div>
                    <div className="icon-div menu-icon"><AiOutlineMenu className='icon ' /></div>
                </div>
                <div className='nav-flex-last'>
                    <div className='icon-end extra'><BsGrid3X3GapFill className='icon-last' /></div>
                    <div className='icon-end extras'><AiOutlinePlus className='icon-last' /></div>
                    <div className='icon-end'><BsMessenger className='icon-last' /></div>
                    <div className='icon-end'><IoMdNotifications className='icon-last' /></div>
                    <div><img className='nav-img img' src="https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/310828632_1154997512059494_2357996840331361849_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-h3eoG1yxUmTAXPQH46t085S80hyoFejzlLzSHKgV6KmyOB0BW04ZQHDaqExGtRRdv_IZJMR0tlcFsRGUsZDo&_nc_ohc=U8Pk5-TX6xAAX-RTObz&tn=jmH2Mb2XhKo3nmqh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDzYLKwtUPGKnM-DEobs1Y6GxiEiMEvdHrX6LVR_oa1FA&oe=63D729FD" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;