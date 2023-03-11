


export const fetchImages = async (searchQuery, page) => {
   
    // console.log(page)
    const KEY = `32978489-20caeca748ffe4537bd9570d6`;
    const BASE_URL = `https://pixabay.com/api/`;

    const response = await fetch(`${BASE_URL}?key=${KEY}&q=${searchQuery}&image_type=photo&per_page=12&orientation=horizontal&page=${page}`);
        
    return response;


    
        
    
}

