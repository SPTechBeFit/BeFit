
import ListaExercicios from './Components/lista'
import axios from "axios";
import { useState, useEffect } from "react"
import style from './style.css'
import api from '../../../services/api';
import { FunctionsTwoTone } from '@material-ui/icons';


function PagExercicios(props) {
    useEffect(() => { listar(); }, [])
    const [exercicios, setExercicios] = useState([]);
    const [exercicioSelecionado, setExercicioSelecionado] = useState(false)
    function listar(props) {
                                                                //transformar id em variavel
        let exercicios = axios.get('http://localhost:8080/treinos/3')
        exercicios
            .then(function (respostaObtida) {
                console.log(respostaObtida.data);
                setExercicios(respostaObtida.data);
                console.log('Fazendo requisição da lista de exercicios')

            })

            .catch((errorOcorrido) => {
                console.log(errorOcorrido)
            });
    }

    function selecionarTreino() {
        setExercicioSelecionado(!exercicioSelecionado);
        console.log('botao clicado')
        console.log(exercicioSelecionado)
        style.background = 'blue';


    }




    return (
        <>
            <div className="imagemExercicio">
                {
                  
                }
            </div>
            <div className="containerModal">

                {
                    exercicios.map((exercicios, index) => {
                        return (
                            <button onClick={selecionarTreino} >
                                    <ListaExercicios
                                    selecionado={exercicios.selecionado}
                                    key={exercicios.id}
                                    id={exercicios.id}
                                    nome={exercicios.nome}
                                    desricao={exercicios.desricao}
                                    imagem={exercicios.imagem}
                                    quantidade={exercicios.quantidade}
                                    tempo={exercicios.tempo}
                                    repeticao={exercicios.repeticao}
                                />
                            </button>
                        );

                    })

                }
                <h1>teste</h1>
            </div>
        </>
    )
}

export default PagExercicios