import axios from 'axios';

const apiDieta = axios.create(
    {
        baseURL : 'http://localhost:8080/dietas'
    }
)
export default apiDieta;