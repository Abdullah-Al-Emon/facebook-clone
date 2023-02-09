import React, { useEffect } from 'react';
import './Navbar.css'
import { AiFillHome, AiOutlineMenu, AiOutlinePlus } from 'react-icons/ai'
import { FaUserFriends } from 'react-icons/fa'
import { BsFillHandbagFill, BsSearch } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { GrGamepad } from 'react-icons/gr'
import { BsGrid3X3GapFill } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs'
import { IoMdNotifications } from 'react-icons/io'
import { RxCross2 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';



const Navbar = ({ leftShow, setLeftShow, rightShow, setRightShow }) =>
{
    const navigate = useNavigate()

    let user = sessionStorage.getItem('user')
    let users = JSON.parse(user)
    useEffect(() =>
    {
        if (user === '' || user === null) {
            navigate('/')
        }
    }, [])

    const handleLogOut = () =>
    {
        sessionStorage.clear()
        toast.success('Log Out', {
            style: {
                border: '1px solid #713200',
                padding: '16px',
                color: '#713200',
            },
            iconTheme: {
                primary: '#713200',
                secondary: '#FFFAEE',
            },
        });
        window.location.reload(true)
    }

    // console.log(users)

    const [open, setOpen] = React.useState(false);

    const handleOpen = () =>
    {
        setOpen(!open);
    };

    return (
        <div className='navbar'>
            <div className='nav-flex'>
                <Link to='/home'><img className='nav-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" /></Link>
                <div className='search-div'><BsSearch className='search-icon' /></div>
                <input placeholder='Search Facebook' type="text" />
            </div>
            <div className='nav-flex'>
                <div className='nav-flex middle-nav'>
                    <Link to='/home'><div className='icon-div'><AiFillHome className='icon color' /></div></Link>
                    <div className='icon-div'><FaUserFriends className='icon' /></div>
                    <div className='icon-div'><BsFillHandbagFill className='icon' /></div>
                    <div className='icon-div'><FaUsers className='icon' /></div>
                    <div className='icon-div game-icon'><GrGamepad className='icon' /></div>
                </div>
                {leftShow && <div onClick={() => setLeftShow(!leftShow)} className="icon-div menu-icon"><AiOutlineMenu className='msg-i' /></div>}
                {!leftShow && <div onClick={() => setLeftShow(!leftShow)} className="icon-div menu-icon"><RxCross2 className='msg-i' /></div>}
            </div>
            <div className='nav-flex-last'>
                <div className='icon-end extra'><BsGrid3X3GapFill className='icon-last' /></div>
                <div className='icon-end extras'><AiOutlinePlus className='icon-last' /></div>
                <div className='icon-end none'><BsMessenger className='icon-last' /></div>
                {rightShow && <div onClick={() => setRightShow(!rightShow)} className='icon-end msg'><BsMessenger className='icon-last' /></div>}
                {!rightShow && <div onClick={() => setRightShow(!rightShow)} className='icon-end'><RxCross2 className='icon-last' /></div>}
                <div className='icon-end'><IoMdNotifications className='icon-last' /></div>
                <div></div>
                <div className='dropdown'>
                    <img onClick={handleOpen} className='nav-img img' src={users?.img} alt="" />
                    {open && <div className='menu'>
                        <Link to='/myProfile' className='btn-my'>My Profile</Link>
                        <button className='btn-log' onClick={handleLogOut} >Log Out</button>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;