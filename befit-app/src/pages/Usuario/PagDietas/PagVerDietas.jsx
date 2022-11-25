
import ListaDietas from './Components/listaGetAllDietas'
import axios from "axios";
import { useState, useEffect, react } from "react"
import Header from '../../../components/Header/Header';
import style from './dietassStyle.css'

let listaDeIngredientes = []

function PagDietas(props) {

    useEffect(() => { listar(); }, [])

    const [dietaClicado, setDietaClicado] = useState(null)
    const [imagemDieta, setImagemDieta] = useState(null)
    const [dietas, setDietas] = useState([]);
    const [idDieta, setIdDieta] = useState = ("")
    const [nomeIngrediente, setNomeIngrediente] = useState = ("")
    const [nome, setNome] = useState = ("")
    const [porcao, setPorcao] = useState = ("")
    const [proteina, setProteina] = useState = ("")
    const [lipidio, setLipidio] = useState = ("")
    const [carboidrato, setCarboidrato] = useState = ("")
    const [sodio, setSodio] = useState = ("")
    const [caloria, setCaloria] = useState = ("")

    function listar() {
        let dietas = axios.get('http://localhost:8080/dietas/' + sessionStorage.getItem("idDieta", props.id))
        //transformar id em variavel
        dietas
            .then(function (respostaObtida) {
                setDietas(respostaObtida.data);
                let ingredientes = {
                    "id": idDieta,
                    "nome": nome,
                    "porcao": porcao,
                    "proteina": proteina,
                    "lipidio": lipidio,
                    "carboidrato": carboidrato,
                    "sodio": sodio,
                    "caloria": caloria
                }
                listaDeIngredientes.push(ingredientes)
            })
            .catch((e) => {
                console.log(e)
            });


    }



    function handleDietaClicado(dieta) {
        setDietaClicado(dieta)
        setImagemDieta({
            backgroundImage: `url(${dieta.imagem})`,
        })
    }

    return (
        <>
            < Header />
            <br />
            <div className="corpoDieta-lista">
                <div className="imagemDieta-lista">
                    {dietaClicado && <><div className="dietaCoverTreino-lista">
                        <div style={imagemDieta} className="dietaImage-lista-painel" ></div>
                        <div className="nomeDieta"> <h1>{dietaClicado.nome}</h1></div>
                    </div>


                        <div class='descricao-do-dieta'>
                            <p>{dietaClicado.descricao}</p>
                        </div>
                    </>
                    }
                </div>

                <div className="containerModal-lista-todos-dietas">

                    {/* {
                        dietas.map((dietas, index) => {
                            return (
                                <ListaDietas key={index}
                                    selecionado={dietas.selecionado}
                                    nome={dietas.nome}
                                    descricao={dietas.descricao}
                                    imagem={dietas.imagem}
                                    onClick={() => { handleDietaClicado(dietas) }}
                                />
                            );

                        })
                    }
                    {
                        <div className='teste'>
                            {listaDeIngredientes.map((listaDeIngredientes, i) => {
                                <div key={i}
                                id={listaDeIngredientes.id}
                                nome={listaDeIngredientes.nome}
                                porcao={listaDeIngredientes.porcao}
                                proteina={listaDeIngredientes.proteina}
                                lipidio={listaDeIngredientes.lipidio}
                                carboidrato={listaDeIngredientes.carboidrato}
                                sodio={listaDeIngredientes.sodio}
                                caloria={listaDeIngredientes.caloria}
                                ></div>
                            })
                            }
                        </div>

                    } */}

                </div>
            </div>
        </>
    )
}

export default PagDietas