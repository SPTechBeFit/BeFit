import axios from 'axios';

var rota = 'http://34.232.149.218:8080';

const apiDieta = axios.create(
    {
        baseURL : rota+'/dietas'
    }
)
export default apiDieta;