import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/';
const apiKey = import.meta.env.VITE_UNSPLASH_KEY;

export const fetchImages = async (query, currentPage) => {
    const response = await axios.get('search/photos', { params: {
    client_id: apiKey,
        query: query,
    page: currentPage,
    per_page: 10,
    content_filter: "high",
}});
    return response.data;
};