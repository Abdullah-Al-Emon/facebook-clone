import React, { useState } from 'react';
import './PreviewImage.css'


const PreviewImage = ({ file, post_img }) =>
{
    console.log(file)
    const [preview, setPreview] = useState(null);

    if (file !== post_img) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>
        {
            setPreview(reader.result);
        }
    }
    return (
        <div>
            {
                file !== post_img ?
                    <img src={preview} className='posting-modal-img' alt="" />
                    :
                    <img src={file} className='posting-modal-img' alt="" />
            }
        </div>
    );
};

export default PreviewImage;