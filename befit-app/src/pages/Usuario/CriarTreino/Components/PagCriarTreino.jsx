
import ListaExercicios from '../listaCriacao'
import axios from "axios";
import { useState } from "react"
import Modal from "react-modal"
import Header from '../../../../components/Header/Header'
import style from './listaStyle.css'
import BannerTreino from '../../BannerTreino/index'
import validator from 'validator';
import * as C from "./styles";


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
    // const [errorTituloTreino,setErrorTituloTreino ] = useState("")
    // const [errorDescTreino,setErrorDescTreino ] = useState("")



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
        // if(validator.isEmpty(errorTituloTreino)){
        //     //setErrorNome("Nome não pode ser vazio")
        //     return;
        //   }

        //   if(!validator.isAlpha(descTreino)){
        //    // setErrorNome("Nome não pode conter numeros")
        //     return;
        //   }

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

        const criadorId = sessionStorage.getItem("id")
        const personId = sessionStorage.getItem("personId")

        const body = {
            "nome": tituloTreino,
            "descricao": descTreino,
            "criadorId": criadorId,
            "personId": personId,
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
            <Header />


            <div className="bodyCriacao">
                <BannerTreino />
                {vaiAparecer === true && <div>
                    <form onSubmit={adicionarTreino} className='form-infos'>
                        <div className="infoTreinoCriacao">
                            <label className="nomeTreino" >Nome Treino <br />
                                <input
                                    type="text"
                                    className='ipt_nomeTreino'
                                    name="ipt_nomeTreino"
                                    defaultValue={tituloTreino}
                                    onChange={(e) => { setTituloTreino(e.target.value) }}
                                />
                                {/* <C.labelError>{errorTituloTreino}</C.labelError> */}
                            </label>
                            <br />
                            <label>Descrição do treino <br />
                                <input className="descTreino"
                                    name="ipt_descTreino"
                                    type="text"
                                    defaultValue={descTreino}
                                    onChange={(e) => { setDescTreino(e.target.value) }}
                                />
                                {/* <C.labelError>{errorDescTreino}</C.labelError> */}
                            </label>
                        </div>
                        <button id="btn-enviar">Enviar</button>
                    </form>

                </div>}

                <br />
                <div className="containerModal-lista">
                    <div className="listaExercicios" id='lista' style={{ display: "none" }}>
                        {
                            exercicios.map((exercicio, index) => {
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
                        <button onClick={enviarTreino}>Salvar treino</button>

                        <Modal isOpen={modalIsOpen} onRequestClose={fechaModal} contentLabel="Teste">

                            <h6 className='title-modal'>Insira as informações</h6>

                            <div className='inputs-form'>

                                <div className='input-wrapper'>
                                    <label htmlFor='repeticoes'>Repeticoes: </label>
                                    <input placeholder='Insira as repetições' className='inputs-modal' id="repeticoes" onChange={(e) => { setRepeticoesTreino(e.target.value) }}></input>
                                </div>

                                <div className='input-wrapper'>
                                    <label htmlFor='quantidade'>Quantidade: </label>
                                    <input placeholder='Quantas vezes será feito' className='inputs-modal' id="quantidade" onChange={(e) => { setQuantidadeTreino(e.target.value) }}></input>
                                </div>

                                <div className='input-wrapper'>
                                    <label htmlFor='tempo'>Tempo: </label>
                                    <input placeholder='Insira o tempo em minutos' className='inputs-modal' id="tempo" onChange={(e) => { setTempoTreino(e.target.value) }}></input>
                                </div>

                                <button onClick={salvarExercicioNaLista} className='btn btn-ok'>Salvar exercício</button>
                                <div onClick={fechaModal} className="btn-cancelar">Cancelar</div>

                            </div>
                        </Modal>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PagCriacaoExercicios
