import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import  { Toaster } from 'react-hot-toast';
import { ImageGallery } from "./ImageGallery/ImageGallery";


export class  App extends React.Component {
  
  state = {
    query: "",
    page: 1,
    
  }



  handleSubmit = (query) => {
    
    this.setState({ query, page: 1,  })
    
    
  }
  
  handlePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  }

  render() {
    return (
      <div>
        <Toaster toastOptions={{duration: 2000,}} />
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery query={this.state.query} page={this.state.page} onLoadMore={this.handlePage} />
    </div>
  );
  }
};
