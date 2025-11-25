import axios from 'axios';

const API_KEY = '53373800-5cba4f67b460dc5eb84c5d72c';
const BASE_URL = 'https://pixabay.com/api/';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,   
        per_page: PER_PAGE
    };

    try {
        const response = await axios.get(BASE_URL, { params });
        return response.data;
        
    } catch (error) {
        throw error;
    }
}