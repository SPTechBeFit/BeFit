import axios from 'axios';

var rota = 'http://34.232.149.218:8080';

const apiExercicios = axios.create(
    {
        baseURL : rota+'/exercicios'
    }
)
export default apiExercicios;