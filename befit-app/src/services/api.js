import axios from 'axios';


var rota = 'http://54.147.103.96';

const api = axios.create(
    {
        baseURL : `${rota}:8080/treinos/`
    }
)
export default api;