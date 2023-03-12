import axios from 'axios';


var rota = 'http://3.227.245.71';

const apiExercicios = axios.create(
    {
        baseURL : rota+':8080/exercicios'
    }
)
export default apiExercicios;