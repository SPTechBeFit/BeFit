import axios from 'axios';


var rota = 'http://54.147.103.96';

const apiExercicios = axios.create(
    {
        baseURL : rota+':8080/exercicios'
    }
)
export default apiExercicios;