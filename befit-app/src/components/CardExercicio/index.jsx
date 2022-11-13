import imagemTeste from '../../assets/images/exerciciosCover/exercioCardio.jpg'
import style from './style.css'
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate } from 'react-router-dom'
import likeButton from '../../assets/images/Icons/favoritoIcon.png'
import likeButtonSelecionado from '../../assets/images/Icons/favoritoIconSelecionado.png'
import transitions from '@material-ui/core/styles/transitions';

function CardExercicio(props) {
    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    const [nome, setNome] = useState(props.nome);
    const [descricao, setDescricao] = useState(props.descricao);
    const [criador, setAno] = useState(props.ano);
    const [selecionado, setSelecionado] = useState();


    const navegar = useNavigate();

    const imagensButton = [
        {
            nome: "like",
            imagem: likeButton
        }, {
            nome: "like Selecionado",
            imagem: likeButtonSelecionado
        }
    ]
    let isSelecionado = true;
    const saveClickProperty = () => {
        setSelecionado(isSelecionado);
        isSelecionado = !isSelecionado;


        //colocar codigo para api.put para mudar a propriedade de treino favorito
    }

    return (
        <>

            <button onClick={() => navegar(`/treino/${props.id}`)} className="boxTreino">
                <div className="imagemCoverTreino">
                    <div style={imagem} className="image"></div>
                </div>
                <div className="infoTreino">
                    <h1>{props.nome}</h1>
                    <h2>{props.descricao}</h2>
                </div>

            </button>
            <div className="likeAction">
                <a onClick={saveClickProperty} className="">
                    <div className="ActionDiv">
                        <img src={selecionado ? likeButtonSelecionado : likeButton} alt="Like button" className='likeButton' />
                    </div>
                </a>
            </div>

        </>

    )
}



export default CardExercicio;




