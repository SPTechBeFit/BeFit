import axios from 'axios';

const api = axios.create(
    {
        baseURL : 'localhost8080'
    }
)
export default api;