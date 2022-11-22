
import ListaExercicios from '../listaCriacao'
import axios from "axios";
import { useState } from "react"
import Modal from "react-modal"
import Header from '../../../../components/Header/Header'
import style from './listaStyle.css'
import BannerTreino from '../../BannerTreino/index'
import validator from 'validator';
import * as C from "./styles";
import ButtonBack from "../../../../components/ButtonSignUp/buttonBack"
import Input from '../../../../components/Input';
import ButtonNext from '../../../../components/ButtonSignUp/button';


Modal.setAppElement("#root")

let listaDeExercicios = []
let vaiAparecer = true;
let vaiAparecerButton = true;

function PagCriacaoExercicios(props) {

    const [tituloTreino, setTituloTreino] = useState("");
    const [descTreino, setDescTreino] = useState("");
    const [repeticoesTreino, setRepeticoesTreino] = useState("");
    const [quantidadeTreino, setQuantidadeTreino] = useState("");
    const [tempoTreino, setTempoTreino] = useState("");
    const [idTreino, setIdTreino] = useState("")
    const [tituloTreinoModal, setTituloTreinoModal] = useState("")
    const [errorRepeticoes, setErrorRepeticoes] = useState("");
    const [errorQuantidade, setErrorQuantidade] = useState("");
    const [errorTempo, setErrorTempo] = useState("");

    const [errorTitulo, setErrorTitulo] = useState("");
    const [errorDesc, setErrorDesc] = useState("");


    const defaultMessage = ('Insira o nome e descricao do seu treino')
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

        
        if(validator.isEmpty(tituloTreino)){
            setErrorTitulo("Titulo não pode ser vazio")
            return;
          }

          if(!validator.isAlpha(tituloTreino)){
            setErrorTitulo("Titulo não pode conter numeros")
            return;
          }
          
          
        if (validator.isEmpty(descTreino)) {
            setErrorDesc("Descricão não pode ser vazia")
            return;
            
        }
        setTituloTreinoModal(tituloTreino)
        console.log(tituloTreino)


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
        vaiAparecerButton = false
        if(validator.isEmpty(repeticoesTreino)){
            setErrorRepeticoes("não pode ser vazio")
            return;
          }

        if(validator.isEmpty(repeticoesTreino)){
            setErrorRepeticoes("não pode ser vazio")
            return;
          }
          if(validator.isEmpty(quantidadeTreino)){
            setErrorQuantidade("não pode ser vazio")
            return;
          }
          if(validator.isEmpty(tempoTreino)){
            setErrorTempo("não pode ser vazio")
            return;
          }

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

    var tituloCriacao = tituloTreino != null ? tituloTreinoModal : defaultMessage;


    return (
        <>
            <Header />
            <div className="bodyCriacao">
                <BannerTreino />
                <div className="infoCriacao">
                    <h1>{defaultMessage}</h1>
                    <h2>
                        <b>{tituloCriacao} </b>
                    </h2>
                </div>
                <div className="modalCriar">

                    {vaiAparecer === true && <div>
                        <form onSubmit={adicionarTreino} className='form-infos'>
                            <div className="contentBox">
                                <div className="infoTreinoCriacao">
                                    <label className="nomeTreino" >
                                        <h1>
                                            Nome Treino
                                        </h1> <br />
                                        <input
                                            type="text"
                                            className='ipt_nomeTreino'
                                            name="ipt_nomeTreino"
                                            defaultValue={tituloTreino}
                                            onChange={(e) => { setTituloTreino(e.target.value) }}
                                        />
                                        
                                        {/* <C.labelError>{errorTituloTreino}</C.labelError> */}
                                    </label>
                                    <C.labelError>{errorTitulo}</C.labelError> 
                                    <br />
                                    <label>
                                        <h1>
                                            Descrição do treino
                                        </h1>
                                        <br />
                                        <textarea className="descTreino" rows="2" cols="20" id="descricao"
                                            name="ipt_descTreino"
                                            type="text"
                                            defaultValue={descTreino}
                                            onChange={(e) => { setDescTreino(e.target.value) }}
                                        />
                                        
                                        {/* <C.labelError>{errorDescTreino}</C.labelError> */}
                                    </label>
                                    <C.labelError>{errorDesc}</C.labelError> 
                                </div>
                                <button id="btn-enviar">Enviar</button>
                            </div>
                        </form>

                    </div>}
                </div>
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

                        {vaiAparecerButton === false && <button id='salvarTreino' className='btn-salvar' onClick={enviarTreino}>Salvar treino</button>}

                        <Modal isOpen={modalIsOpen} onRequestClose={fechaModal} contentLabel="ExerciciosInfo">

                            <h6 className='title-modal'>Insira as informações</h6>

                            <div className='inputs-form'>

                                <div className='input-wrapper'>
                                <h1>Insira as repetições</h1>
                                    <label htmlFor='repeticoes'> </label>
                                    <Input placeholder='ex: 15' type="number" className='inputs-modal' id="repeticoes" onChange={(e) => { setRepeticoesTreino(e.target.value) }}></Input>
                                     <C.labelError>{errorRepeticoes}</C.labelError> 
                                </div>

                                <div className='input-wrapper'>
                                <h1>Quantas vezes será feito</h1>
                                    <label htmlFor='quantidade'></label>
                                    <Input placeholder='ex: 3' type="number" className='inputs-modal' id="quantidade" onChange={(e) => { setQuantidadeTreino(e.target.value) }}></Input>
                                    <C.labelError>{errorQuantidade}</C.labelError> 
                                </div>

                                <div className='input-wrapper'>
                                <h1>Tempo em minutos</h1>
                                    <label htmlFor='tempo'></label>
                                    <Input placeholder='ex: 1' type="number" className='inputs-modal' id="tempo" onChange={(e) => { setTempoTreino(e.target.value) }}></Input>
                                    <C.labelError>{errorTempo}</C.labelError> 
                                </div>

                                <C.ContainerForButtons>
                                    <ButtonBack Text="CANCELAR" onClick={fechaModal} />
                                    <ButtonNext Text="SALVAR" onClick={salvarExercicioNaLista} />
                                </C.ContainerForButtons>

                                {/* <button onClick={salvarExercicioNaLista} className='btn btn-ok'>Salvar exercício</button>
                                <button onClick={fechaModal} className="btn-cancelar">Cancelar</button> */}

                            </div>
                        </Modal>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PagCriacaoExercicios
