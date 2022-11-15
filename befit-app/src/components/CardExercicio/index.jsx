import imagemTeste from '../../assets/images/exerciciosCover/exercioCardio.jpg'
import style from './style.css'
import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import likeButton from '../../assets/images/Icons/favoritoIcon.png'
import likeButtonSelecionado from '../../assets/images/Icons/favoritoIconSelecionado.png'
import api from '../../services/api'

function CardExercicio(props) {
    const imagem = {
        backgroundImage: `url(${props.imagem ? props.imagem : imagemTeste})`
    }

    const [nome, setNome] = useState(props.nome);
    const [descricao, setDescricao] = useState(props.descricao);
    const [criador, setAno] = useState(props.ano);
    const [selecionado, setSelecionado] = useState(props.favoritado);



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
            api.delete(`/desfavoritar/5bb7a32c-20ff-42d2-b684-33bf61f6eb13/${props.id}`)
                .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
                    console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
                    // utilizando o setter para alterar o valor do estado (useState) de "musicas"        
                })
                .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
                    console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
                });
        } else {
            const desfavoritar = api.post(`/favoritar/5bb7a32c-20ff-42d2-b684-33bf61f6eb13/${props.id}`)

                .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
                    console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
                    // utilizando o setter para alterar o valor do estado (useState) de "musicas"        
                })
                .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
                    console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
                });


        }

        //colocar codigo para api.put para mudar a propriedade de treino favorito
    }


    return (
        <>
            <button onClick={() => navegar(`/treino/`)} className="boxTreino">
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




