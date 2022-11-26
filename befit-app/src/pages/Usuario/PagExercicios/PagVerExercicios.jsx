
import ListaExercicios from './Components/listaGetAll'
import axios from "axios";
import { useState, useEffect, react } from "react"
import BannerTreino from '../BannerTreino';
import Header from '../../../components/Header/Header';
import style from './exerciciosStyle.css'



function PagExercicios(props) {

    useEffect(() => { listar(); })

    const [exercicioClicado, setExercicioClicado] = useState(null)
    const [imagemExercicio, setImagemExercicio] = useState(null)
    const [exercicios, setExercicios] = useState([]);

    function listar() {
        let exercicios = axios.get('http://localhost:8080/treinos/' + sessionStorage.getItem("idTreino", props.id))
        //transformar id em variavel
        exercicios
            .then(function (respostaObtida) {
                setExercicios(respostaObtida.data);
            })
            .catch((errorOcorrido) => {
                // console.log(errorOcorrido)
            });
    }

    function handleExercicioClicado(exercicio) {
        setExercicioClicado(exercicio)
        setImagemExercicio({
            backgroundImage: `url(${exercicio.imagem})`,
        })
    }

    return (
        <>
            < Header />
            <br />
            <br />
            <br />
            <br />
            <div className="corpo-lista">

                <div className="imagemExercicio-lista">

                    {exercicioClicado && <><div className="imagemCoverTreino-lista">
                        <div className="nomeTreino"> <h1>{exercicioClicado.nome}</h1></div>

                        <div style={imagemExercicio} className="image-lista-painel" ></div>
                    </div>


                        <div class='descricao-do-exercicio'>
                            <p>{exercicioClicado.descricao}</p>
                        </div>
                    </>
                    }
                </div>

                <div className="containerModal-lista-todos">

                    {
                        exercicios.map((exercicios, index) => {
                            return (
                                <ListaExercicios
                                    selecionado={exercicios.selecionado}
                                    id={exercicios.id}
                                    nome={exercicios.nome}
                                    //descricao={exercicios.descricao}
                                    imagem={exercicios.imagem}
                                    quantidade={exercicios.quantidade}
                                    tempo={exercicios.tempo}
                                    repeticao={exercicios.repeticao}
                                    onClick={() => { handleExercicioClicado(exercicios) }}
                                />
                            );

                        })

                    }
                </div>
            </div>
        </>
    )
}

export default PagExercicios