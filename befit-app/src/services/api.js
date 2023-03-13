import axios from 'axios';


var rota = 'http://34.232.149.218';

const api = axios.create(
    {
        baseURL : `${rota}:8080/treinos/`
    }
)
export default api;