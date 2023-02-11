import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { GrFormDown } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import './FastColumn.css'


const FastColumn = () =>
{

    let user = sessionStorage.getItem('user')
    let users = JSON.parse(user)

    return (
        <div className='fast-column'>
            <Link className='class' to='/myProfile'>
                <div className='fast-list'>
                    <div>
                        <img className='nav-img img' src={users?.img} alt="" />
                    </div>
                    <p>{users?.first_name} {users?.surname}</p>
                </div>
            </Link>
            <Link className='class' to='/home/friends'>
                <div className='fast-list'>
                    <div>
                        <img className='nav-img img' src='https://i.ibb.co/LvZFdBZ/friends.png' alt="" />
                    </div>
                    <p>Friends</p>
                </div>
            </Link>
            <Link className='class' to='/home/groups'>
                <div className='fast-list'>
                    <div>
                        <img className='nav-img img' src='https://i.ibb.co/25pNpBX/group.png' alt="" />
                    </div>
                    <p>Groups</p>
                </div>
            </Link>
            <Link className='class' to='/home/friends'>
                <div className='fast-list'>
                    <div>
                        <img className='nav-img img' src='https://i.ibb.co/p31z9mT/most-recent.png' alt="" />
                    </div>
                    <p>Most Recent</p>
                </div>
            </Link>
            <Link className='class' to='/home/friends'>
                <div className='fast-list'>
                    <div>
                        <img className='nav-img img' src='https://i.ibb.co/3RsLbWg/marketplace.png' alt="" />
                    </div>
                    <p>Marketplace</p>
                </div>
            </Link>
            <Link className='class' to='/home/friends'>
                <div className='fast-list'>
                    <div>
                        <img className='nav-img img' src='https://i.ibb.co/3kkpJXB/timing.png' alt="" />
                    </div>
                    <p>Memories</p>
                </div>
            </Link>
            {/* {
                profileInfo?.map(info =>
                    <div key={info.id} className='fast-list'>
                        <div>
                            <img className='nav-img imgs' src={info.img} alt="" />
                        </div>
                        <p>{info.title}</p>
                    </div>)
            } */}
            <div className='fast-list'>
                <div className='list-icon-div'>
                    <GrFormDown className='list-icon' />
                </div>
                <p>See more</p>
            </div>
            <div className="line"></div>
            <div className='shortcut-flex'>
                <p className='shortcuts'>Your shortcuts</p>
                <div>
                    <a href="e">Edit</a>
                </div>
            </div>
            <div className='fast-list'>
                <div>
                    <img className='nav-img imgs' src='https://i.ibb.co/99q2RSP/js-bd.jpg' alt="" />
                </div>
                <p>JS Bangladesh - Coding Talks</p>
            </div>
            <div className='fast-list'>
                <div>
                    <img className='nav-img imgs' src='https://i.ibb.co/sH1sccL/r-native.jpg' alt="" />
                </div>
                <p>React Native Bangladesh Community</p>
            </div>
            <div className='fast-list'>
                <div>
                    <img className='nav-img imgs' src='https://i.ibb.co/j311L1F/talk.jpg' alt="" />
                </div>
                <p>Talk.js</p>
            </div>
            <div className='fast-list'>
                <div>
                    <img className='nav-img imgs' src='https://i.ibb.co/QY3Ky35/learn.jpg' alt="" />
                </div>
                <p>Learn with Sumit - LWS - Community</p>
            </div>
            <div className='fast-list'>
                <div>
                    <img className='nav-img imgs' src='https://i.ibb.co/48ZL10j/programmers.jpg' alt="" />
                </div>
                <p>BD Programmers</p>
            </div>
            <div className='fast-list'>
                <div className='list-icon-div'>
                    <GrFormDown className='list-icon' />
                </div>
                <p>See more</p>
            </div>
            <div>
                <div className='fast-column-last post-link-div'>
                    <a href="https://www.facebook.com/privacy/policy/?entry_point=comet_dropdown">privacy</a> . <a href="https://www.facebook.com/policies_center/">Terms</a> . <a href="https://www.facebook.com/business">Advertising</a> . <a href="https://www.facebook.com/help/568137493302217">Ad Choices</a><br />
                    <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies</a> . <a href="m">More</a> . <span>Meta © 2023</span>
                </div>
            </div>
        </div>
    );
};

export default FastColumn;