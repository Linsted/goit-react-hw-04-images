import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import React, { useEffect, useState } from "react"
import * as Api from "../../api/api";
import PropTypes from 'prop-types';
import { Button } from "components/Button/Button";
import toast from 'react-hot-toast';
import { List, Container } from "./ImageGallery.styled";



export const ImageGallery = ({ onLoadMore, query, page }) => {
    const perPage = 12;
    
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalHits, setTotalHits] = useState(0);
    const [showButton, setShowButton] = useState(true);


    useEffect(() => {
        if (query.length === 0) return;
        setLoading(true);
        if (query.length === 0) { setShowButton(true) };

        const fetchImagesRequest = async () => {
            try {
                const data = await Api.fetchImages(query, page);
                
                if (data.hits.length === 0) {
                    setLoading(false);
                    setShowButton(false);

                    return toast('Nothing`s find');
                };

                if (data.hits.length > 0 && page !== 1) {
                    
                    setImages((prevImages) => [...prevImages, ...data.hits]);
                    setLoading(false);
                    setTotalHits(data.totalHits);
                    return;
                }

                setImages(data.hits);
                setLoading(false);
                setTotalHits(data.totalHits);

            } catch (error) {
                console.log(error);
            };
        }

        fetchImagesRequest();

    }, [query, page]);



    return (
            
        <Container>
            <List><ImageGalleryItem images={images} /></List>
            <Loader loading={loading} />
            {(showButton && images.length !== 0 && page !== totalHits / perPage) && <Button onClick={onLoadMore} />}
                
        </Container>
    )
};

ImageGallery.propTypes = {
    query: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
};