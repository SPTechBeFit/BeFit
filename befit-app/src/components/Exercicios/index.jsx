
import fotoExercicio from "../../assets/images/exerciciosCover/exercioCardio.jpg"

function ExercicioCover(props) {
    return (
        <>
                <div id="imagemTreino">
                    <img src={fotoExercicio} alt="teste" className="imagemCoverTreino" />
                    <div className="infoTreino">
                    <h1 id="titulo">{props.nome}</h1>
                    <h2>{props.dificuldade}</h2>
                  </div>
                </div>
        </>
    )
}

export default ExercicioCover;