import React from "react";
import Modal from "react-modal";

import ImageCropper from "./ImageCropper";

const customStyles = {
  content: {
    top: "50%",
    zIndex: '1000',
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ImageModal = ({ modalIsOpen, closeModal, image, onCropImage, ratio, aspect }) =>
{
  return (
    <div className="crop-modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // style={customStyles}
        className='content'
        contentLabel="Example Modal"
      >
        {image && (
          <ImageCropper
            aspect={aspect}
            imgName={image.name}
            onCropImage={onCropImage}
            inputImg={URL.createObjectURL(image)}
            closeModal={closeModal}
            ratio={ratio}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
