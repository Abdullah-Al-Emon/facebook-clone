import React from 'react';

const ActiveList = ({img, title}) =>
{
    return (
        <div className='last-list'>
            <div className='online'>
                <img className='nav-img' src={img} alt="" />
            </div>
            <p>{title}</p>
        </div>
    );
};

export default ActiveList;