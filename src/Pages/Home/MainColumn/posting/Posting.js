import React from 'react';
import './Posting.css'
import { GiEarthAsiaOceania } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'
import { BsThreeDots } from 'react-icons/bs'

const Posting = () =>
{
    return (
        <div className='full-posting'>
            <div className='top'>
                <div className='posting-flex between '>
                    <div className='posting-flex'>
                        <div>
                            <img className='nav-img' src="https://scontent.fdac11-1.fna.fbcdn.net/v/t39.30808-6/276169948_3058595251136498_3513931327847645840_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGSYn1n1yQv-lc6NoxNHZa4hpBqW1o072WGkGpbWjTvZTde1qlMcPsGK29vrnrPWAq_AkGfiWO3BKiLHdiL_g5Y&_nc_ohc=IOlFa9yv-WUAX_jkxtN&_nc_ht=scontent.fdac11-1.fna&oh=00_AfBy8an5WoMVi99ORFoIthMoqNEGqZJcYoWLzOeFWkm8bA&oe=63DA65AE" alt="" />
                        </div>
                        <div>
                            <h3><a href="">Kazi Sojib</a></h3>
                            <p><a href="">December 9, 2022</a> . <GiEarthAsiaOceania /> </p>
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
                <div>Nice Place wonderfull.</div>
            </div>
            <div>
                <img className='posting-img' src="https://www.bakingbusiness.com/ext/resources/2021/6/SunSetOverWheatField_Lead.jpg?t=1623416999&width=1080" alt="" />
            </div>
            <div className='react-div'>
                <div className='react-flex between'>
                    <div className='react'>
                        <img className='like' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Facebook_Like_button.svg/2048px-Facebook_Like_button.svg.png" alt="" />
                        <img className='like' src="https://www.freeiconspng.com/thumbs/facebook-love-png/blank-heart-love-hd-png-28.png" alt="" />
                        <a href=""><span>13</span></a>
                    </div>
                    <div>
                        <a href=""><span>0 Comments</span></a> <a href=""><span>0 Shares</span></a>
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