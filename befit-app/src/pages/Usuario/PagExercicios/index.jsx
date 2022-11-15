
import ListaExercicios from './Components/lista'
import axios from "axios";
import { useState, useEffect } from "react"
import style from './style.css'
import api from '../../../services/api';


function PagExercicios(props) {
    useEffect(() => { listar(); }, [])
    const [exercicios, setExercicios] = useState([]);
    function listar(props) {

        let exercicios = axios.get('http://localhost:8080/treinos/1')
        exercicios
            .then(function (respostaObtida) {
                console.log(respostaObtida.data);
                setExercicios(respostaObtida.data);
                console.log('teste')

            })

            .catch((errorOcorrido) => {
                console.log(errorOcorrido)
            });
    }

    return (
        <>
        <div className="imagemExercicio">
            
        </div>
            <div className="containerModal">
                    
                {
                    exercicios.map((exercicios, index) => {
                        return (
                            <ListaExercicios
                                key={exercicios.id}
                                id={exercicios.id}
                                nome={exercicios.nome}
                                desricao={exercicios.desricao}
                                imagem={exercicios.imagem}
                                quantidade={exercicios.quantidade}
                                tempo={exercicios.tempo}
                                repeticao={exercicios.repeticao}

                            />
                        );

                    })
                }
                <h1>teste</h1>
            </div>
        </>
    )
}

export default PagExercicios