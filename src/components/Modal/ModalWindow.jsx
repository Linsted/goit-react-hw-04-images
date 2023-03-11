import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { Modal } from './Modal.styled';
import { Backdrop } from './Modal.styled';
import { ButtonClose } from './Modal.styled';
import { createPortal } from 'react-dom';
import { GrClose } from "react-icons/gr";


export const ModalWindow = ({onClose,largeImage}) => { 


const handleKeydown = (event) => { 
    if (event.code === 'Escape') { onClose() };
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeydown);

        return (() => {
            document.removeEventListener("keydown", handleKeydown);
        })
    });


const  handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose()};
    };



    return createPortal(
        <Backdrop onClick={handleBackdropClick}>
            <Modal>
                <img src={largeImage} alt="" width="1100" height="700" />
                <ButtonClose onClick={onClose} type='button'><GrClose /></ButtonClose>
            </Modal>
        </Backdrop>, document.querySelector("#modal-root")
    );
};










ModalWindow.propTypes = {
    largeImage: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};