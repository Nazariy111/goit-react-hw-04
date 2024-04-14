import axios from 'axios';

export async function getUnsplashImages(inputValue, page) {
    const BASE_URL = 'https://api.unsplash.com/search/photos/';
    const API_KEY = '?client_id=41sijZe2L9Kz1cUJpQ-YJCnV8Txjz0PMfQ9yUVprKzk';
    const url = `${BASE_URL}${API_KEY}`;
    const params = {
        query: `${inputValue}`,
        page,
        per_page: 15,
    };
    const res = await axios.get(url, { params });
    return res.data;
}