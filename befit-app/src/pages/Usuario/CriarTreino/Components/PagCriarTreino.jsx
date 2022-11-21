
import ListaExercicios from '../listaCriacao'
import axios from "axios";
import { useState } from "react"
import Modal from "react-modal"


Modal.setAppElement("#root")

let listaDeExercicios = []
let vaiAparecer = true;

function PagCriacaoExercicios(props) {

    const [tituloTreino, setTituloTreino] = useState("");
    const [descTreino, setDescTreino] = useState("");
    const [repeticoesTreino, setRepeticoesTreino] = useState("");
    const [quantidadeTreino, setQuantidadeTreino] = useState("");
    const [tempoTreino, setTempoTreino] = useState("");
    const [idTreino, setIdTreino] = useState("")



    const [modalIsOpen, setIsOpen] = useState(false)
    const [exercicios, setExercicios] = useState([]);

    function abreModal(idTreino) {
        setIdTreino(idTreino)
        setIsOpen(true)
    }

    function fechaModal() {
        setIsOpen(false)
    }

    function listar(props) {
        //transformar id em variavel
        let exercicios = axios.get('http://localhost:8080/exercicios')
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

    function adicionarTreino(evento) {
        evento.preventDefault();
        if (descTreino === "" && tituloTreino === "") {
            return console.log("titulo vazio")
        }
        vaiAparecer = false;
        listar()
        document.getElementById("lista").style.display = "block";
    }

    // {
    //     "nome": "string",
    //     "descricao": "string",
    //     "criadorId": 2,
    //     "series": [
    //       {
    //         "exercicioId": 1,
    //         "quantidade": 0,
    //         "repeticao": 0,
    //       }
    //     ]
    //   }


    function salvarExercicioNaLista() {

        let series = {
            "exercicioId": idTreino,
            "quantidade": quantidadeTreino,
            "repeticao": repeticoesTreino
        }

        listaDeExercicios.push(series)

        fechaModal()
    }

    function enviarTreino() {

        const criadorId = sessionStorage.getItem("personId")

        const body = {
            "nome": tituloTreino,
            "descricao": descTreino,
            "personId": criadorId,
            "series": listaDeExercicios
        }


        axios.post('http://localhost:8080/treinos', body).then((res) => {
            alert('treino cadastrado com sucesso')

        }
        ).catch(error => {
            console.log(error)
        })
    }


    return (
        <>
            <div className="bodyCriacao">

                { vaiAparecer === true && <div>
                    <form onSubmit={adicionarTreino}>
                        <div className="infoTreinoCriacao">
                            <label>Nome Treino <br />
                                <input type="text"
                                    name="ipt_nomeTreino"
                                    defaultValue={tituloTreino}
                                    onChange={(e) => { setTituloTreino(e.target.value) }}
                                />
                            </label>
                            <br />
                            <label>Descrição do treino <br />
                                <input
                                    name="ipt_descTreino"
                                    type="text"
                                    defaultValue={descTreino}
                                    onChange={(e) => { setDescTreino(e.target.value) }}
                                />
                            </label>
                        </div>
                        <button className="btn">Enviar</button>
                    </form>
                </div>}
                <br />
                <div className="containerModal-lista">
                    <div className="listaEcercicios" id='lista' style={{ display: "none" }}>
                        {
                            exercicios.map((exercicio, index) => {
                                console.log(exercicio)
                                return (
                                    <>
                                        <div className='exercicio-lista' onClick={() => { abreModal(exercicio.id) }}>
                                            <ListaExercicios key={index.id}
                                                selecionado={exercicio.selecionado}
                                                id={exercicio.id}
                                                nome={exercicio.nome}
                                                descricao={exercicio.descricao}
                                                imagem={exercicio.imagem}
                                                quantidade={exercicio.quantidade}
                                                tempo={exercicio.tempo}
                                                repeticao={exercicio.repeticao}
                                            />
                                        </div>
                                    </>
                                );
                            })
                        }

                        <Modal isOpen={modalIsOpen} onRequestClose={fechaModal} contentLabel="Teste">

                            <div className='inputs-form'>

                                <label htmlFor='repeticoes'>Repeticoes: </label>
                                <input id="repeticoes"

                                    onChange={(e) => { setRepeticoesTreino(e.target.value) }}
                                ></input>

                                <label style={{ "marginTop": '20px' }} htmlFor='quantidade'>Quantidade: </label>
                                <input id="quantidade"

                                    onChange={(e) => { setQuantidadeTreino(e.target.value) }}

                                ></input>

                                <label style={{ "marginTop": '20px' }} htmlFor='tempo'>Insira o tempo: </label>
                                <input id="tempo" type="number" min="0"

                                    onChange={(e) => { setTempoTreino(e.target.value) }}

                                ></input> Minutos

                                <button onClick={salvarExercicioNaLista} className='btn-ok'>Ok</button>

                            </div>



                        </Modal>
                    </div>
                    <div onClick={enviarTreino}>Salvar treino</div>
                </div>
            </div>
        </>
    )
}

export default PagCriacaoExercicios