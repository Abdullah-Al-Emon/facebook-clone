import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./cropImage";
import "./cropper.css"

const ImageCropper = ({
  onCropImage,
  inputImg,
  imgName,
  closeModal,
  ratio,
  aspect
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(inputImg, croppedAreaPixels);
      onCropImage(
        new File([croppedImage], imgName, {
          type: "image/png",
          lastModified: new Date().getTime(),
        })
      );
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line
  }, [croppedAreaPixels]);
  return (
    /* need to have a parent with `position: relative` 
    to prevent cropper taking up whole page */
    <div className="cropper">
      <Cropper
        // minZoom={1}
        image={inputImg}
        crop={crop}
        zoom={zoom}
        aspect={aspect}
        // restrictPosition={false}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
        style={{
          containerStyle: {
            width: 355,
            height: 325,
            position: "relative",
          },
        }}
      />
      <div className="crop-modal-div">
        <button
          onClick={closeModal}
          className="btn-cancel"
        >Cancel</button>
        <input
          type="range"
          defaultValue={zoom}
          value={zoom}
          max={3}
          min={ratio}
          step={0.1}
          onChange={e => setZoom(e.target.value)}
        />
        <button
          onClick={() => {
            showCroppedImage();
            closeModal();
          }}
          className="btn-save"
        >Save</button>
      </div>
    </div>
  );
};

export default ImageCropper;
