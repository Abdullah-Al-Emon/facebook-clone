import React, { useEffect, useState } from 'react';
import './LastColumn.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiVideoAddFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'

const LastColumn = () =>
{
    const [Conversations, setConversation] = useState([]);

    useEffect(() =>
    {
        fetch('JSON/conversationGroup.json')
            .then(res => res.json())
            .then(data => setConversation(data))
    }, [])

    const [active, setActive] = useState([]);

    useEffect(() =>
    {
        fetch('JSON/active.json')
            .then(res => res.json())
            .then(data => setActive(data))
    }, [])
    return (
        <div className='last-column'>
            <div className='last-page-flex'>
                <p className='page-shortcuts'>Your Pages and Profiles</p>
                <div className='page-icon-div'>
                    <BiDotsHorizontalRounded className='page-icon' />
                </div>
            </div>
            <div className='last-list'>
                <div>
                    <img className='nav-img' src='https://res.cloudinary.com/drh68zyt1/image/upload/v1675736151/ebp4hh4lxtq6fch1umkw.jpg' alt="" />
                </div>
                <p>সুন্নাহ আমার আদর্শ</p>
            </div>
            <div className='page-other'>
                <div className='switch'>
                    <div>
                        <span className='i'></span>
                    </div>
                    <div>
                        Switch into Page
                    </div>
                </div>
                <div className='switch'>
                    <div>
                        <span className='j'></span>
                    </div>
                    <div>
                        Create promotion
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <div className='last-page-flex'>
                <p className='page-shortcuts'>Contacts</p>
                <div className='icons-div'>
                    <div className='page-icon-div'>
                        <RiVideoAddFill className='page-icon' />
                    </div>
                    <div className='page-icon-div'>
                        <AiOutlineSearch className='page-icon' />
                    </div>
                    <div className='page-icon-div'>
                        <BiDotsHorizontalRounded className='page-icon' />
                    </div>
                </div>
            </div>
            {
                active?.map(grp => <div key={grp.id} className='last-list'>
                <div className='online'>
                    <img className='nav-img' src={grp.img} alt="" />
                </div>
                <p>{grp.name}</p>
            </div>)
            }
            <div className="line"></div>
            <div className='last-page-flex'>
                <p className='page-shortcuts'>Groups Conversations</p>
                <div className='page-icon-div'>
                    {/* <BiDotsHorizontalRounded className='page-icon' /> */}
                </div>
            </div>
            {
                Conversations?.map(grp => <div key={grp.id} className='last-list'>
                <div className='online'>
                    <img className='nav-img' src={grp.img} alt="" />
                </div>
                <p>{grp.title}</p>
            </div>)
            }
            <div className='fast-list'>
                <div className='list-icon-div'>
                    <HiPlus className='list-icon' />
                </div>
                <p>Create new group</p>
            </div>
        </div>
    );
};

export default LastColumn;