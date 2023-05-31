import axios from 'axios';

var rota = 'https://backbefit.duckdns.org';

const apiDieta = axios.create(
    {
        baseURL : rota+'/dietas'
    }
)
export default apiDieta;