import axios from 'axios';

const API_BASE_URL = "http://localhost:5001/api";
export default API_BASE_URL;

const API_URL = `${API_BASE_URL}/events`;

export const postEvent = async (x, y, count) => {
    try {
        const response = await axios.post(API_URL, { x, y, count });
        return response.data;
    } catch (error) {
        console.error('Error posting event:', error);
        throw error;
    }
};

export const fetchEvents = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error;
    }
};