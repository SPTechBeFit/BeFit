
import fotoExercicio from "../../assets/images/exerciciosCover/exercioCardio.jpg"
import style from './style.css'
import { useState } from 'react';
import TreinoModal from '../modalExercicios/index.jsx';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'



function ExercicioCover(props) {
    const [isActive, setIsActive] = useState(false);

    const ObjetoSelecionado = () => {

        setIsActive(current => !current);
        console.log('botao clicado')



    };
    return (
        <>
            <button style={{ backgroundColor: isActive ? '#230F80' : '', color: isActive ? '#7E7E7E' : '', }} onClick={ObjetoSelecionado}>
                <div className="boxTreino">
                    <div className="imagemTreino" >
                        <NavLink to={`/treino/${props.id}`} > <img src={fotoExercicio} className="imagemCoverTreino"></img> </NavLink>
                        <div className="infoTreino">
                            <h1 id="titulo">{props.nome}</h1>
                        </div>
                    </div>
                </div>
            </button>
        </>

    )
}



export default ExercicioCover;




