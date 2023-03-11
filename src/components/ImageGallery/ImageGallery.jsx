import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import React from "react"
import * as Api from "../../api/api";
import PropTypes from 'prop-types';
import { Button } from "components/Button/Button";
import toast from 'react-hot-toast';
import { List, Container } from "./ImageGallery.styled";

export class ImageGallery extends React.Component {

    static defaultProps  = {
        perPage : 12,
    }

    state = {
        images: [],
        loading: false,
        totalHits: 0,
        perPage: this.props.perPage,
        showButton: true,
        
    }

    static propTypes = {
        query: PropTypes.string.isRequired,
        page: PropTypes.number.isRequired,
    }

    async  componentDidUpdate(prevProps, prevState) {
         
        // if (this.props.query.length === 0) {
            
        //     return
        // }
        if (prevProps.query !== this.props.query || prevProps.page !== this.props.page || this.props.query.length === 0) {
          this.setState({loading: true, showButton: true })
        try {
            
            const response = await Api.fetchImages(this.props.query, this.props.page);
            if (!response.ok) { throw new Error(Error) }
            const data = await response.json();
            if (data.hits.length === 0) {
                this.setState({loading: false, showButton: false})
                return toast('Nothing`s find');
            }
           
            if(data.hits.length > 0 && prevProps.query === this.props.query) { return this.setState({ images: [...prevState.images, ...data.hits], loading: false, totalHits: data.totalHits });}
            this.setState({images: data.hits, loading: false, totalHits: data.totalHits})


         } catch (error) {
            console.log(error.message)
         }

              
    }
      
    }
    

    
    render() {
        
        return (
            
            <Container>
                <List><ImageGalleryItem images={this.state.images} /></List>
                <Loader loading={this.state.loading} />
                {(this.state.showButton && this.state.images.length !== 0 && this.state.page !== this.state.totalHits/this.state.perPage)  && <Button onClick={this.props.onLoadMore} />}
                
            </Container>
)
    }
}




