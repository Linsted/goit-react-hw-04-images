
import axios from 'axios';

export const fetchImages = async (searchQuery, page) => {
   
    axios.defaults.baseURL = 'https://pixabay.com/api/';
    const KEY = `32978489-20caeca748ffe4537bd9570d6`;


  const response = await  axios.get('', {
        params: {
            key: KEY,
            q: searchQuery,
            image_type: "photo",
            per_page: 12,
            orientation: "horizontal",
            page,
        },
    });  

    
    return response.data;

}

