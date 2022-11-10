import imagemTeste from '../../assets/images/exerciciosCover/exercioCardio.jpg'
import style from './style.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom'

function CardExercicio(props) {

    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    const [nome, setNome] = useState(props.nome);
    const [descricao, setDescricao] = useState(props.descricao);
    const [criador, setAno] = useState(props.ano);

    const navegar = useNavigate();



    return (
        <>

            <button onClick={() => navegar(`/treino/${props.id}`)}className="boxTreino">
                <div className="imagemCoverTreino">
                   <div style={imagem} className="image"></div>
                </div>
                    <div className="infoTreino">
                        <h1>{props.nome}</h1>
                        <h2>{props.descricao}</h2>
                    </div>

                
            </button>
        </>

    )
}



export default CardExercicio;




