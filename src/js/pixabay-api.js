import axios from 'axios';

const API_KEY = '53373800-5cba4f67b460dc5eb84c5d72c';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
    const params = {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
    };
    return axios.get(BASE_URL, { params: params })
        .then(response => {
            return response.data.hits;
        });
}