
import ListaCriacaoExercicio from './listaCriacaoExercicios'
import axios from "axios";
import { useState, useEffect, react } from "react"
import listaStyle from './listaStyle.css'



function PagExercicios(props) {
    useEffect(() => { listar(); }, [])
    const [exercicios, setExercicios] = useState([]);
    function listar(props) {
        //transformar id em variavel
        let exercicios = axios.get('http://localhost:8080/treinos/4')
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


    return (
        <>
            <div className="containerModal">

                {
                    exercicios.map((exercicios, index) => {
                        return (
                            <button>
                                <ListaCriacaoExercicio
                                    key={exercicios.id}
                                    selecionado={exercicios.selecionado}
                                    id={exercicios.id}
                                    nome={exercicios.nome}
                                    descricao={exercicios.descricao}
                                    imagem={exercicios.imagem}
                                    quantidade={exercicios.quantidade}
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