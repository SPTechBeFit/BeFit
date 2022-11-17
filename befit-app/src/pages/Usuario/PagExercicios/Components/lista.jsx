import React from "react"
import style from './style.css'
import imagemTeste from '../../../../assets/images/exerciciosCover/exercioCardio.jpg'


function ListaExercicios(props) {
    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }
    return (
        <>
            <div className="exercicio">
                <div className="imagemCoverTreino">
                    <div style={imagem} className="image"></div>
                </div>
                <div className="infoExercicio">
                    <h1>{props.nome}</h1>
                    <div className="descricao">
                    <h2>{props.descricao}</h2>
                    </div>
                   
                    <h2>Quantidade:{props.quantidade}</h2>
                    <h2>Repetições:{props.repeticao}</h2>
                </div>
            </div>


        </>
    )
}

export default ListaExercicios