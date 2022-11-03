
import fotoExercicio from "../../assets/images/exerciciosCover/exercioCardio.jpg"
import style from './style.css'

function ExercicioCover(props) {
    return (
        <>
            <div className="boxTreino">
                <div className="imagemTreino">
                    <img src={fotoExercicio} alt="teste" className="imagemCoverTreino" />
                    <div className="infoTreino">
                        <h1 id="titulo">{props.nome}</h1>
                        <h2>{props.dificuldade}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExercicioCover;