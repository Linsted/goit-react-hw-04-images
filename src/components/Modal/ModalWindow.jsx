import PropTypes from 'prop-types';
import React from 'react';
import { Modal } from './Modal.styled';
import { Backdrop } from './Modal.styled';
import { ButtonClose } from './Modal.styled';
import { createPortal } from 'react-dom';
import { GrClose } from "react-icons/gr";


export class ModalWindow extends React.Component {
    
    static propTypes = {
        largeImage: PropTypes.string.isRequired,
        onClose: PropTypes.func.isRequired,
    }

    handleKeydown = (event) => {
          
            if(event.code === 'Escape' ) {
                
                this.props.onClose();
            }
        }
    
    componentDidMount() {
        
        document.addEventListener("keydown", this.handleKeydown);
        
    }


    componentWillUnmount() {
        
        document.removeEventListener("keydown", this.handleKeydown)
    }


    handleBackdropClick = (event) =>{
        if (event.target === event.currentTarget) {
            this.props.onClose()
        } 
    }

    render() {
            return createPortal(
                            <Backdrop onClick={this.handleBackdropClick}>
                                <Modal>
                                        <img src={this.props.largeImage} alt="" width="1100" height="700" />
                                        <ButtonClose onClick={this.props.onClose} type='button'><GrClose/></ButtonClose>
                                </Modal>
                            </Backdrop>, document.querySelector("#modal-root")
    )
    }
    
    
}


// GrStatusCritical