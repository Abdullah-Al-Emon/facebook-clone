import React, { useState } from 'react';
import './PreviewImage.css'


const PreviewImage = ({file}) => {
    const [preview, setPreview] = useState(null);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);
    }
    return (
        <div>
            <img src={preview} className='posting-modal-img' alt="" />
        </div>
    );
};

export default PreviewImage;