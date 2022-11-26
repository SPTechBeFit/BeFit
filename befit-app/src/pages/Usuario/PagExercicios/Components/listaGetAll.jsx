import React from "react"
import imagemTeste from '../../../../assets/images/exerciciosCover/exercioCardio.jpg'
import { useState, useEffect } from "react"


function ListaExercicios(props) {
    const [isActive, setIsActive] = useState(false);



    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }


    const handleClick = () => {
        setIsActive(current => !current);
        console.log(isActive)
        
    };

    return (
        <>
            <div className="infoExercicio-todos" key={props.key}>
                <h1>{props.nome}</h1>

            </div>
            <div className="exercicio-lista-todos"
                onClick={props.onClick}
                
            
                style={{
                    backgroundColor: isActive ? 'blue' : '',
                    color: isActive ? 'white' : '',
                }}>

                <div className="imagemCoverTreino-lista-todos">
                    <div style={imagem} className="image-lista"></div>

                </div>
                <div className="series-lista-todos">
                    <h2>Quantidade: {props.quantidade}<b> </b></h2>
                    <h2>Repetições: {props.repeticao}<b> </b> </h2>
                    <h2>Tempo: {props.tempo}</h2>
                </div>
                <div className="descricao-listas-todos">
                    <h2>{props.descricao}</h2>
                </div>


            </div>


        </>
    )
}

export default ListaExercicios