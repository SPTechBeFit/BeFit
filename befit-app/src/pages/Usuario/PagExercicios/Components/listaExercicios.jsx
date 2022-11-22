import React from "react"
import imagemTeste from '../../../../assets/images/exerciciosCover/exercioCardio.jpg'
import { useState, useEffect } from "react"
import StyleButtonLista from './styleButtonLista.css'
import axios from "axios"


function ListaExercicios(props) {
    const [isActive, setIsActive] = useState(false);



    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    return (
        <>
            <div className="infoExercicio" key={props.key}>
                <h1>{props.nome}</h1>

            </div>
            <div className="exercicio-lista"

                onClick={props.onClick}
                style={{
                    backgroundColor: isActive ? 'blue' : '',
                    color: isActive ? 'white' : '',
                }}>

                <div className="imagemCoverTreino-lista">
                    <div style={imagem} className="image-lista"></div>

                </div>
                <div className="series-lista">
                    <h2>Quantidade:{props.quantidade}<b> </b></h2>
                    <h2>Repetições:{props.repeticao}<b> </b> </h2>
                </div>
                <div className="descricao-listas">
                    <h2>{props.descricao}</h2>
                </div>


            </div>


        </>
    )
}

export default ListaExercicios