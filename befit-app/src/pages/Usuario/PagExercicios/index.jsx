
import ListaExercicios from './Components/listaExercicios'
import axios from "axios";
import { useState, useEffect, react } from "react"
import listaStyle from './exerciciosStyle.css'



function PagExercicios(props) {
    useEffect(() => { listar(); }, [])
    const [exercicios, setExercicios] = useState([]);
    function listar(props) {
        //transformar id em variavel
        let exercicios = axios.get('http://localhost:8080/treinos/1')
        exercicios
            .then(function (respostaObtida) {
                console.log(respostaObtida.data);
                setExercicios(respostaObtida.data);
                console.log('Fazendo requisição da lista de exercicios testando')

            })

            .catch((errorOcorrido) => {
                console.log(errorOcorrido)
            });
    }


    return (
        <>
       
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="corpo-lista">
                <div className="imagemExercicio-lista">
                    {

                    }
                </div>
                <div className="containerModal-lista">

                    {
                        exercicios.map((exercicios, index) => {
                            return (
                                <button>
                                    <ListaExercicios
                                        selecionado={exercicios.selecionado}
                                        id={exercicios.id}
                                        nome={exercicios.nome}
                                        descricao={exercicios.descricao}
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
            </div>
        </>
    )
}

export default PagExercicios