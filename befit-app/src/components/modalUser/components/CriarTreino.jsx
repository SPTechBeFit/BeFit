
import ListaCriacaoExercicio from '../../../pages/Usuario/CriarTreino/Components/listaCriacaoExercicios'
import axios from "axios";
import { useState, useEffect } from "react"

function PagExerciciosCriar(props) {
    useEffect(() => { listar(); }, [])
    const [exercicios, setExercicios] = useState([]);
    const [exercicioSelecionado, setExercicioSelecionado] = useState(false)
    function listar(props) {
        //transformar id em variavel
        let exercicios = axios.get('http://localhost:8080/treinos/1')
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
                            <div onClick={selecionarTreino} >
                                <ListaCriacaoExercicio
                                    
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
                <h1>teste</h1>
       
        </>
    )
}

export default PagExerciciosCriar