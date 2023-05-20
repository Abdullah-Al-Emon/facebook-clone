import React, { useEffect, useState } from 'react';
import './LastColumn.css'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { RiVideoAddFill } from 'react-icons/ri'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiPlus } from 'react-icons/hi'

const LastColumn = () =>
{
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
                    <img className='last-column-img' src='https://res.cloudinary.com/drh68zyt1/image/upload/v1675736151/ebp4hh4lxtq6fch1umkw.jpg' alt="" />
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
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/bRXJmVH/sojib.jpg' alt="" />
                </div>
                <p>Kazi Sojib</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/wwdkxfs/nayme.jpg' alt="" />
                </div>
                <p>Nayme</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/b1x4r8D/rasel1.jpg' alt="" />
                </div>
                <p>Md Rassel Hossain</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/1mm1PZt/sulaiman.jpg' alt="" />
                </div>
                <p>Solaiman Shadin</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/qJBjGF9/atul.jpg' alt="" />
                </div>
                <p>Fahim Hossain Atul</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/bJ8ZLnF/nahid.jpg' alt="" />
                </div>
                <p>KaZi NaHiD</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/k6hNLXt/khan.jpg' alt="" />
                </div>
                <p>নাঈম খাঁন</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/8DN26Vv/tanmoy.jpg' alt="" />
                </div>
                <p>Tanmoy Parvez</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/1nyTYTy/ilias.jpg' alt="" />
                </div>
                <p>Ilias Zaman</p>
            </div>

            <div className="line"></div>
            <div className='last-page-flex'>
                <p className='page-shortcuts'>Groups Conversations</p>
                <div className='page-icon-div'>
                    {/* <BiDotsHorizontalRounded className='page-icon' /> */}
                </div>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/sH1sccL/r-native.jpg' alt="" />
                </div>
                <p>React Native Community</p>
            </div>
            <div className='last-list'>
                <div className='online'>
                    <img className='last-column-img' src='https://i.ibb.co/48ZL10j/programmers.jpg' alt="" />
                </div>
                <p>BD Programmers</p>
            </div>
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