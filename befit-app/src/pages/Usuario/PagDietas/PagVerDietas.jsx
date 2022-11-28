
import ListaDietas from './Components/listaGetAllDietas'
import axios from "axios";
import { useState, useEffect } from "react"
import style from './pagDietaStyle.css'
import Header from '../../../components/Header/Header';


function PagDietas(props) {

    useEffect(() => {
        listarDietas();
        listarIngredientes()
    }, [])

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



    return (
        <>

        <Header/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br />
            <div className="dieta-corpo">

                <div className="containerModal-lista-todos-dietas">
                    <ListaDietas
                        nome={dietas.nome}
                        descricao={dietas.descricao}
                        imagem={dietas.imagem}
                    />
                </div> 

                <div className='ContainerListaIngredientes'>
                    {ingredientes?.map((ingredientes, i) => {
                        return (
                            <>
                                <div className="listaIngredientes" key={i}>
                                <ol type="a">
                                <div className='nome-ingrediente'>
                                <li>{ingredientes.nome}</li>    
                                </div>    
                                    <div className='ingredientes'>
                                        <li>Gramas: {ingredientes.porcao}g</li>
                                        <li>Proteina: {(ingredientes.proteina).toFixed(2)}</li>
                                        <li>Lipidio: {(ingredientes.lipidio).toFixed(2)}</li>
                                        <li>Carboidrato: {(ingredientes.carboidrato).toFixed(2)}</li>
                                        <li>Sodio: {(ingredientes.sodio).toFixed(2)}</li>
                                        <li>Caloria: {(ingredientes.caloria).toFixed(2)}</li>
                                    </div>
                                </ol>
                                </div>
                            </>
                        )

                    })}
                </div>
        </div>
        </>
    )
}

export default PagDietas