
import ListaDietas from './Components/listaGetAllDietas'
import axios from "axios";
import { useState, useEffect } from "react"


function PagDietas(props) {

    useEffect(() => {
        listarDietas();
        listarIngredientes() 
    }, [])


    const [dietaClicado, setDietaClicado] = useState(null)
    const [imagemDieta, setImagemDieta] = useState(null)
    const [dietas, setDietas] = useState([]);
    const [ingredientes, setIngredientes] = useState([]);

    function listarDietas() {
        axios.get(`http://localhost:8080/dietas/${sessionStorage.getItem("idDieta")}`)
            .then(function (respostaObtida) {
                setDietas(respostaObtida.data.dieta)
            })
            .catch((errorOcorrido) => {
                console.log(errorOcorrido)
            });

    }

    function listarIngredientes() {
         axios.get(`http://localhost:8080/dietas/${sessionStorage.getItem("idDieta")}`)
            .then(function (respostaObtida) {
                setIngredientes(respostaObtida.data.ingredientes);
            })
            .catch((errorOcorrido) => {
                console.log(errorOcorrido)
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
            <br />
            <div className="corpoDieta-lista">
                <div className="imagemDieta-lista">
                    {dietaClicado && <><div className="dietaCoverTreino-lista">
                        <div style={imagemDieta} className="dietaImage-lista-painel" ></div>
                        <div className="nomeDieta"> <h1>{dietaClicado.nome}</h1></div>
                    </div>
                        <div class='descricao-da-dieta'>
                            <p>{dietaClicado.descricao}</p>
                        </div>
                    </>
                    }
                </div>

                <div className="containerModal-lista-todos-dietas">
                    {/* <div className="teste" style={{ backgroundColor: 'red', height: "100vh", width: "50vw" }}></div> */}


                    <ListaDietas
                        selecionado={dietas.selecionado}
                        nome={dietas.nome}
                        descricao={dietas.descricao}
                        imagem={dietas.imagem}
                    //onClick={() => { handleDietaClicado(dietas) }}
                    />

                    <div className='teste'>
                        {ingredientes?.map((ingredientes, i) => {
                            return (
                                <>
                                <p key={i}>
                                   {ingredientes.nome} |
                                    {ingredientes.porcao} |
                                    {ingredientes.proteina} |
                                    {ingredientes.lipidio} |
                                    {ingredientes.carboidrato} |
                                    {ingredientes.sodio} |
                                    {ingredientes.caloria}
                                </p>


                                <div 
                                    id={ingredientes.id}
                                    nome={ingredientes.nome}
                                    porcao={ingredientes.porcao}
                                    proteina={ingredientes.proteina}
                                    lipidio={ingredientes.lipidio}
                                    carboidrato={ingredientes.carboidrato}
                                    sodio={ingredientes.sodio}
                                    caloria={ingredientes.caloria}
                                ></div>
                                </>
                            )

                        })
                        }
                    </div>


                </div>
            </div>
        </>
    )
}

export default PagDietas