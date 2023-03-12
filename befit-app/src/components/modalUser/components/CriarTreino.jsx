
import ListaCriacaoExercicio from '../../../pages/Usuario/CriarTreino/Components/listaCriacaoExercicios'
import axios from "axios";
import { useState, useEffect } from "react"
import apiExercicios from '../../../services/apiExercicios'

var rota = 'http://54.147.103.96';

function PagExerciciosCriar(props) {
    useEffect(() => { listar(); }, [])
    const [exercicios, setExercicios] = useState([]);
    const [exercicioSelecionado, setExercicioSelecionado] = useState(false)
    function listar(props) {
        //transformar id em variavel
        let exercicios = apiExercicios.get(rota+':8080/exercicios')
        exercicios
            .then(function (respostaObtida) {
                console.log(respostaObtida.data);
                setExercicios(respostaObtida.data);
                console.log('Fazendo requisição da lista de exercicios para criacao')

            })
            .catch((errorOcorrido) => {
                console.log(errorOcorrido)
            });
    }
    function selecionarTreino() {
        setExercicioSelecionado(!exercicioSelecionado);
        console.log('botao clicado')
        console.log(exercicioSelecionado)
    }

    return (
        <>
                {
                    exercicios.map((exercicios, index) => {
                        return (
                            <div >
                                <ListaCriacaoExercicio
                                key={exercicios.id}
                                    selecionado={exercicios.selecionado}
                                    nome={exercicios.nome}
                                    desricao={exercicios.desricao}
                                    imagem={exercicios.imagem}
                                    quantidade={exercicios.quantidade}
                                    tempo={exercicios.tempo}
                                    repeticao={exercicios.repeticao}
                                />
                            </div>
                        );
                    })
                }
               
        </>
    )
}

export default PagExerciciosCriar