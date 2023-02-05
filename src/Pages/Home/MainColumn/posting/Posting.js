import React from 'react';
import './Posting.css'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BsThreeDots } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa';

const Posting = ({profile_pic, first_name, surname, time, desc, post_img, like, comment, share, _id, options}) =>
{
    // console.log(options)
    return (
        <div className='full-posting'>
            <div className='top'>
                <div className='posting-flex between '>
                    <div className='posting-flex'>
                        <div>
                            <img className='nav-img' src={profile_pic} alt="" />
                        </div>
                        <div>
                            <h3><a href="">{first_name} {surname}</a></h3>
                            <p><a href="">{time}</a> . {options === 'Public' ? <GiEarthAsiaOceania /> : <FaLock/>} </p>
                        </div>
                    </div>
                    <div className='posting-flex'>
                        <div className='page-icon-div'>
                            <BsThreeDots className='page-icon' />
                        </div>
                        <div className='page-icon-div'>
                            <RxCross2 className='page-icon' />
                        </div>
                    </div>
                </div>
                <div className='desc'>{desc}</div>
            </div>
            <div>
                <img className='posting-img' src={post_img} alt="" />
            </div>
            <div className='react-div'>
                <div className='react-flex between'>
                    <div className='react'>
                        <img className='like' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/2048px-Facebook_Like_button.svg.png" alt="" />
                        {/* <img className='like' src="https://www.freeiconspng.com/thumbs/facebook-love-png/blank-heart-love-hd-png-28.png" alt="" /> */}
                        <a href=""><span>{like}</span></a>
                    </div>
                    <div>
                        <a href=""><span>{comment} Comments</span></a> <a href=""><span>{share} Shares</span></a>
                    </div>
                </div>
                <div className="line"></div>
                <div className='post-top-flex'>
                    <div className='post-flex'>
                        <span className='likes'></span>
                        <p>Like</p>
                    </div>
                    <div className='post-flex'>
                        <span className='comment'></span>
                        <p>Comment</p>
                    </div>
                    <div className='post-flex'>
                        <span className='share'></span>
                        <p>Share</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posting;