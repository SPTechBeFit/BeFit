import imagemTeste from '../../../../assets/images/exerciciosCover/exercioCardio.jpg'
import React from 'react'


function ListaCriacaoExercicio(props) {

    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    

    return (
        <>
            <div  className="boxTreino">
                <div className="imagemCoverTreino">
                    <div style={props.imagem} className="image"></div>
                </div>
                <div className="infoTreino">
                    <h1>{props.nome}</h1>
                    <h2>{props.descricao}</h2>
                   
                </div>

            </div>
           

        </>

    )

}

export default ListaCriacaoExercicio