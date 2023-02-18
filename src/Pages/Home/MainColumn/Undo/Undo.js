import axios from 'axios';
import React from 'react';
import { API } from '../../../../Helpers/ConfigAPI';
import './Undo.css'

const Undo = ({user_Id, _id, setState}) => {


    const handleVisible = () => {
        const visible = {
            visibility: "Visible",
            postId: _id,
            userId: user_Id
        }
        axios.put(API + '/undo',
            visible
        )
            .then(res => 
            {
                setState(prev => !prev)
                console.log(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='undo-top-div'>
            <div className='undo-div'>
                <div>
                    <img src="https://res.cloudinary.com/drh68zyt1/image/upload/v1676363958/mdkqckjieh8u32sgengb.png" alt="" />
                </div>
                <div>
                    <p className='undo-title'>Post hidden</p>
                    <p className='undo-desc'>You'll see less posts like this.</p>
                </div>
            </div>
            <div>
                <button onClick={handleVisible}>Undo</button>
            </div>
        </div>
    );
};

export default Undo;