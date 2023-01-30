import React, { useEffect, useState } from 'react';
import { GrFormDown } from 'react-icons/gr'
import './FastColumn.css'


const FastColumn = () =>
{
    const [profileInfo, setProfileInfo] = useState([]);

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
            <div className='fast-list'>
                <div>
                    <img className='nav-img img' src='https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/310828632_1154997512059494_2357996840331361849_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-h3eoG1yxUmTAXPQH46t085S80hyoFejzlLzSHKgV6KmyOB0BW04ZQHDaqExGtRRdv_IZJMR0tlcFsRGUsZDo&_nc_ohc=U8Pk5-TX6xAAX-RTObz&tn=jmH2Mb2XhKo3nmqh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDzYLKwtUPGKnM-DEobs1Y6GxiEiMEvdHrX6LVR_oa1FA&oe=63D729FD' alt="" />
                </div>
                <p>Abdullah Al Emon</p>
            </div>
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