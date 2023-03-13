import axios from 'axios';


var rota = 'http://34.232.149.218';

const apiExercicios = axios.create(
    {
        baseURL : rota+':8080/exercicios'
    }
)
export default apiExercicios;