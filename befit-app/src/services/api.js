import axios from 'axios';


var rota = 'http://3.227.245.71';

const api = axios.create(
    {
        baseURL : `${rota}:8080/treinos/`
    }
)
export default api;