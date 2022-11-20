import axios from 'axios';

const apiExercicios = axios.create(
    {
        baseURL : 'http://localhost:8080/exercicios'
    }
)
export default apiExercicios;