
import ListaDietas from './Components/listaGetAllDietas'
import axios from "axios";
import { useState, useEffect } from "react"
import style from './pagDietaStyle.css'


function PagDietas(props) {

    useEffect(() => {
        listarDietas();
        listarIngredientes()
    }, [])

    const [arqExport] = useState()
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



    // function handleDietaClicado(dieta) {
    //     setDietaClicado(dieta)
    //     setImagemDieta({
    //         backgroundImage: `url(${dieta.imagem})`,
    //     })

    // }

    function handleExport() {
        fetch(`http://localhost:8080/dietas/exportar/${sessionStorage.getItem("idDieta")}`, arqExport, {
            method: 'GET',
            headers: {
                'Content-Type': 'text/form-data',
            },
        })
            .then((response) => response.blob())
            .then((blob) => {
                // Create blob link to download
                const url = window.URL.createObjectURL(
                    new Blob([blob]),
                );
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute(
                    'download',
                    `Dieta ${dietas.nome}.txt`,
                );
                document.body.appendChild(link);
                link.click();

            })
            .catch((errorOcorrido) => {
                console.log(arqExport)
                console.log(errorOcorrido)
            })


    }


    return (
        <>
            <br />
            <div className="corpoDieta-lista">
                <div className="containerDieta">
                    <div className="imagemDieta-lista">
                        {dietaClicado && <><div className="dietaCover-lista">
                            <div style={imagemDieta} className="dietaImage-painel" ></div>
                            <div className="nomeDieta"> <h1>{dietaClicado.nome}</h1></div>
                        </div>
                            <div class='descricao-da-dieta'>
                                <p>{dietaClicado.descricao}</p>
                            </div>
                        </>
                        }
                    </div>
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



                </div>

                <div className='ContainerListaIngredientes'>
                    {ingredientes?.map((ingredientes, i) => {
                        return (
                            <>
                                <div className="listaIngredientes" key={i}>
                                    <h1>{ingredientes.nome} </h1>
                                    <h1>{ingredientes.porcao} Gramas</h1>
                                    <h2>proteina {ingredientes.proteina} </h2>
                                    <h2>lipidio {ingredientes.lipidio}</h2>
                                    <h2>carboidrato {ingredientes.carboidrato}</h2>
                                    <h2>sodio {ingredientes.sodio}</h2>
                                    <h2>caloria {ingredientes.caloria}</h2>

                                </div>

                            </>
                        )

                    })
                    }
                </div>
            </div>
            <button id="botao-import-export" onClick={() => handleExport()}>Exportar</button>

        </>
    )
}

export default PagDietas