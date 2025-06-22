import axios from "axios";

export async function getImagesByQuery(query, page = 1) {
    const API_KEY = "50818793-d0305411d1a3093dc980e97a9";

    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page,
        per_page: 15,
    });
    
    const response = await axios(`https://pixabay.com/api/?${params}`)
    return response.data;
};