import { ModalWindow } from 'components/Modal/ModalWindow';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { ModalOpenButton } from './ImageGalleryItem.styled';


export const ImageGalleryItem = ({images}) => {

    const [openModal, setOpenModal] = useState(false);
    const [largeImage, setLargeImage] = useState('');


    const openModalWindow = (largeImage) => {
        setOpenModal(true);
        setLargeImage(largeImage);
    };

    const closeModal = () => setOpenModal(false);


    return (
        <>
            {images.map(image => <li key={image.id}>
                <ModalOpenButton onClick={() => { openModalWindow(image.largeImageURL) }} type='button'>
                    <img src={image.webformatURL} alt={image.tags} width="400" height="300" />
                </ModalOpenButton>
            </li>)}
            {openModal && (<ModalWindow onClose={closeModal} largeImage={largeImage} />)}
        </>
    );
};
 



ImageGalleryItem.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.object
    ).isRequired,
};