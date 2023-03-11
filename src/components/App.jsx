import React, { useState } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import  { Toaster } from 'react-hot-toast';
import { ImageGallery } from "./ImageGallery/ImageGallery";



export const App = () => {
  
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleSubmit = (query) => {
    setQuery(query);
    setPage(1);
    
  }

  const handlePage = () => {
    setPage(prevPage=> prevPage + 1)
  }

  
  return (
      <div>
        <Toaster toastOptions={{duration: 2000,}} />
        <Searchbar onSubmit={handleSubmit} />
        <ImageGallery
          query={query}
          page={page}
          onLoadMore={handlePage} />
    </div>
  );
}