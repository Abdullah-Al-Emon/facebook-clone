import React from 'react';
import LeftSideList from '../ReUsable/LeftSideList';
import './FastColumn.css'
import friends from '../../../assets/friends.png'
import group from '../../../assets/group.png'
import recent from '../../../assets/most-recent.png'
import market from '../../../assets/marketplace.png'
import timing from '../../../assets/timing.png'
import talk from '../../../assets/talk.jpg'
import js_bd from '../../../assets/js-bd.jpg'
import r_native from '../../../assets/r-native.jpg'
import learn from '../../../assets/learn.jpg'
import programmers from '../../../assets/programmers.jpg'
import { GrFormDown } from 'react-icons/gr'


const FastColumn = () =>
{
    return (
        <div className='fast-column'>
            <div className='fast-list'>
                <div>
                    <img className='nav-img img' src='https://scontent.fdac11-2.fna.fbcdn.net/v/t39.30808-6/310828632_1154997512059494_2357996840331361849_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeH-h3eoG1yxUmTAXPQH46t085S80hyoFejzlLzSHKgV6KmyOB0BW04ZQHDaqExGtRRdv_IZJMR0tlcFsRGUsZDo&_nc_ohc=U8Pk5-TX6xAAX-RTObz&tn=jmH2Mb2XhKo3nmqh&_nc_ht=scontent.fdac11-2.fna&oh=00_AfDzYLKwtUPGKnM-DEobs1Y6GxiEiMEvdHrX6LVR_oa1FA&oe=63D729FD' alt="" />
                </div>
                <p>Abdullah Al Emon</p>
            </div>
            <LeftSideList title={'Friends'} img={friends} />
            <LeftSideList title={'Groups'} img={group} />
            <LeftSideList title={'Most Recent'} img={recent} />
            <LeftSideList title={'Marketplace'} img={market} />
            <LeftSideList title={'Memories'} img={timing} />
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
                    <a href="">Edit</a>
                </div>
            </div>
            <LeftSideList title={'JS Bangladesh - Coding Talks'} img={js_bd} />
            <LeftSideList title={'React Native Bangladesh Community'} img={r_native} />
            <LeftSideList title={'Talk.js'} img={talk} />
            <LeftSideList title={'Learn with Sumit - LWS - Community'} img={learn} />
            <LeftSideList title={'BD Programmers'} img={programmers} />
            <div className='fast-list'>
                <div className='list-icon-div'>
                    <GrFormDown className='list-icon' />
                </div>
                <p>See more</p>
            </div>
            <div>
                <div className='fast-column-last'>
                    <a href="">privacy</a> . <a href="">Terms</a> . <a href="">Advertising</a> . <a href="">Ad Choices</a><br />
                    <a href="">Cookies</a> . <a href="">More</a> . <span>Meta © 2023</span>
                </div>
            </div>
        </div>
    );
};

export default FastColumn;