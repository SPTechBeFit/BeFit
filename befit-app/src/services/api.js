import axios from 'axios';

const api = axios.create(
    {
        baseURL : `http://34.232.149.218:8080`
    }
)
export default api;