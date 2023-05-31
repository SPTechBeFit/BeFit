import axios from 'axios';

const api = axios.create(
    {
        baseURL : `https://backbefit.duckdns.org`
    }
)
export default api;