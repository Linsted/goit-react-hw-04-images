import { ModalWindow } from 'components/Modal/ModalWindow';
import PropTypes from 'prop-types';
import React from 'react';
import { ModalOpenButton } from './ImageGalleryItem.styled';

export class  ImageGalleryItem extends React.Component {
    
    static propTypes = {
        images: PropTypes.arrayOf(
          PropTypes.object
        ).isRequired,
    }

    state = {
        openModal: false,
        largeImage: "",
    }

    openModal = (largeImage) => {
        
        this.setState({openModal: true, largeImage})
    }

    closeModal = (evt) => {
        this.setState({openModal: false})
    }

    render() {
            return (
        <>
                    {this.props.images.map(image => <li key={image.id}>
                        <ModalOpenButton onClick={() => { this.openModal(image.largeImageURL) }} type='button'>
                            <img src={image.webformatURL} alt={image.tags} width="400" height="300" />
                        </ModalOpenButton>
                        </li>)}
            {this.state.openModal && (<ModalWindow onClose={this.closeModal} largeImage={this.state.largeImage} />)}
        </>
    )
    }
    

    
}

