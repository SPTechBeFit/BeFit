import React from "react"
import imagemTeste from '../../../../assets/images/exerciciosCover/exercioCardio.jpg'
import { useState } from "react"

function ListaExerciciosCriacao(props) {
    const [isActive, setIsActive] = useState(false);
    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    const handleClick = () => {
        setIsActive(current => !current);
        console.log(isActive)
    };

    return (
        <><div className="teste" key={props.key}>
            <div className="infoExercicio">
                <h1>{props.nome}</h1>

            </div>
            <div className="exercicio-lista"

                onClick={handleClick}
                style={{
                    backgroundColor: isActive ? 'blue' : '',
                    color: isActive ? 'white' : '',
                }}>
                <div className="imagemCoverTreino-lista">
                    <div style={imagem} className="image-lista"></div>

                </div>
                <div className="descricao-listas">
                    <h2>{props.descricao}</h2>
                </div>


            </div>
        </div>

        </>
    )
}

export default ListaExerciciosCriacao