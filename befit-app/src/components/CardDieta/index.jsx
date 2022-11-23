import imagemTeste from '../../assets/images/exerciciosCover/exercioCardio.jpg'
import style from './style.css'
import { useState, useEffect, react } from "react"
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import likeButton from '../../assets/images/Icons/favoritoIcon.png'
import likeButtonSelecionado from '../../assets/images/Icons/favoritoIconSelecionado.png'
import api from '../../services/api'
import PagExercicios from '../../pages/Usuario/PagExercicios'

function CardDieta(props) {
    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    const [nome, setNome] = useState(props.nome);
    const [descricao, setDescricao] = useState(props.descricao);
    const [criador, setAno] = useState(props.ano);
    const [selecionado, setSelecionado] = useState(props.favoritado);


    const [personId, setPersonId] = useState(() => {
        const saved = localStorage.getItem("personId");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });


    
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

    const saveClickProperty = () => {
        setSelecionado(!selecionado);
        if (selecionado) {
            api.delete(`/dietas/desfavoritar/${sessionStorage.getItem("personId")}/${props.id}`)
                .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
                    console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
                    // utilizando o setter para alterar o valor do estado (useState) de "musicas"        
                })
                .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
                    console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
                });
        } else {
            const favoritar = api.post(`/dietas/favoritar/${sessionStorage.getItem("personId")}/${props.id}`)

                .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
                    console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
                    // utilizando o setter para alterar o valor do estado (useState) de "musicas"        
                })
                .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
                    console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
                });


        }

    }

    const routeChange = () => {
        let path = (`/dietas/${props.nome}/${props.id}`);
        sessionStorage.setItem("idDieta", props.id);
        navegar(path);
        
    }
    //navegar(`/treino/${props.nome}/${props.id}`)

    return (
        <>
            <button
                onClick={() => {routeChange()}} className="boxTreino">
                <div className="imagemCoverTreino">
                    <div style={imagem} className="image"></div>
                </div>
                <div className="infoTreino">
                    <h1>{props.nome}</h1>
                    <h2 rows="5" cols="2" id="descricao" >{props.descricao}</h2>
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



export default CardDieta;




