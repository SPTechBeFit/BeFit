import React from "react"
import imagemTeste from '../../../../assets/images/exerciciosCover/exercioCardio.jpg'
import { useState, useEffect } from "react"
import './listaDietas.css'


function ListaDietas(props) {
    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    return (
        <>
        
            <div className="info-dieta" key={props.key}>
                <h1>{props.nome}</h1>

            </div>
            <div className="lista-dieta">

                <div className="imagem-cover-dieta">
                    <div style={imagem} className="dieta-image-lista"></div>

                </div>
                <div className="descricao-dieta">
                    <h2>{props.descricao}</h2>
                </div>


            </div>


        </>
    )
}

export default ListaDietas