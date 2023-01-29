import React from 'react';
import './LeftSideList.css'

const LeftSideList = ({ title, img }) =>
{
    return (
        <div className='fast-list'>
            <div>
                <img className='nav-img imgs' src={img} alt="" />
            </div>
            <p>{title}</p>
        </div>
    );
};

export default LeftSideList;