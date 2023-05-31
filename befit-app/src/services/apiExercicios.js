import axios from 'axios';

var rota = 'https://backbefit.duckdns.org';

const apiExercicios = axios.create(
    {
        baseURL : rota+'/exercicios'
    }
)
export default apiExercicios;