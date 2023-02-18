import { useFormik } from 'formik';
import React, { useState } from 'react';
import ImageInput from '../../Components/PhotoCrops/file/ImageInput';
import Default_User_Pic from "../../Components/PhotoCrops/defaultUserPic.svg";
import './Group.css'

const Groups = () =>
{
    const [image, setImage] = useState("");
    const [images, setImages] = useState("");
    console.log(images)
    const formik = useFormik({
        initialValues: {
            photo: null,
            file: null
        },
        onSubmit: values =>
        {
            console.log(values)
        }
    })

    return (
        <div className='m-column'>
            <form onSubmit={formik.handleSubmit}>
                <ImageInput
                    formik={formik}
                    imageData={image.photo?.src}
                    defaultPic={Default_User_Pic}
                    type="admin"
                    id='photo'
                    name="photo"
                    label="Add Photo"
                    showPreview
                    onChange={(files) => setImage(files, "admin")}
                />
                <ImageInput
                    formik={formik}
                    imageData={images.file?.src}
                    defaultPic={Default_User_Pic}
                    type="admin"
                    className="company-logo"
                    name="file"
                    label="Add Photo"
                    showPreview
                    onChange={(files) => setImages(files, "admin")}
                />
                <button type='submit'>Submit</button>
            </form>

        </div>
    );
};

export default Groups;