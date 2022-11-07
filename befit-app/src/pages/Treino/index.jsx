
import ExercicioCover from '../../components/Exercicios/index.jsx';
import React, { useEffect, useState } from "react"
import api from '../../services/api.js'



function TreinoSelecionado(props) {
    const [lista, setLista] = useState([]);

    useEffect(() => { listarImagens() }, [])
    function listarImagens() {
        api.get().then((response) => {
            console.log('teste', response.data)
            setLista(response.data);
        })
            .catch((erro) => {
                console.log(erro)
            })
    };
    return (
        <>
        

        </>
    )
}

export default TreinoSelecionado