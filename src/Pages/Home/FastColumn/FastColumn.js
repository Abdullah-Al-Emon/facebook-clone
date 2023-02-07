import React, { useEffect, useState } from 'react';
import { GrFormDown } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import './FastColumn.css'


const FastColumn = () =>
{
    const [profileInfo, setProfileInfo] = useState([]);

    let user = sessionStorage.getItem('user')
    let users = JSON.parse(user)

    useEffect(() =>
    {
        fetch('JSON/profileInfo.json')
            .then(res => res.json())
            .then(data => setProfileInfo(data))
    }, [])
    const [groupsShort, setGroupShort] = useState([]);

    useEffect(() =>
    {
        fetch('JSON/groupShorcut.json')
            .then(res => res.json())
            .then(data => setGroupShort(data))
    }, [])

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
            {
                profileInfo?.map(info => <div key={info.id} className='fast-list'>
                    <div>
                        <img className='nav-img imgs' src={info.img} alt="" />
                    </div>
                    <p>{info.title}</p>
                </div>)
            }
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
            {
                groupsShort?.map(group => <div key={group.id} className='fast-list'>
                    <div>
                        <img className='nav-img imgs' src={group.img} alt="" />
                    </div>
                    <p>{group.title}</p>
                </div>)
            }
            <div className='fast-list'>
                <div className='list-icon-div'>
                    <GrFormDown className='list-icon' />
                </div>
                <p>See more</p>
            </div>
            <div>
                <div className='fast-column-last'>
                    <a href="https://www.facebook.com/privacy/policy/?entry_point=comet_dropdown">privacy</a> . <a href="https://www.facebook.com/policies_center/">Terms</a> . <a href="https://www.facebook.com/business">Advertising</a> . <a href="https://www.facebook.com/help/568137493302217">Ad Choices</a><br />
                    <a href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0">Cookies</a> . <a href="m">More</a> . <span>Meta © 2023</span>
                </div>
            </div>
        </div>
    );
};

export default FastColumn;