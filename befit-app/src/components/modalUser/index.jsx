
import React, { useEffect, useState } from "react"
import api from '../../services/api.js'
import CardExercicio from '../CardExercicio/index'
import CriarTreino from './components/CriarTreino'



function ModalUser(props) {


    const titulos = [
        {
            id: 1,
            title: 'Pesquisar treinos',
            item: '/catalogo/5bb7a32c-20ff-42d2-b684-33bf61f6eb13'

        },
        {

            id: 2,
            title: 'Meus Treinos',
            item: '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13'

        },
        {

            id: 3,
            title: 'Criar Treinos',
            item: ''

        },
        {
            id: 4,
            title: 'Dietas',
            item: '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13'

        }
    ]

    const pageAtual = (window.location.pathname);



    const nomeFiltrado = titulos.filter(titulos => {
        switch (pageAtual) {
            case '/usuario/exercicios':
                return titulos.title === 'Pesquisar treinos' && titulos.item === '/catalogo/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            case '/usuario/meustreinos':
                return titulos.title === 'Meus Treinos' && titulos.item === '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            case '/usuario/criar/treinos':
                return titulos.title === 'Criar Treinos' && titulos.item === '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            case '/usuario/dietas':
                return titulos.title === 'Dietas' && titulos.item === '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            default:
                console.log('Mudando titulos');

        }
    });
    const [treinos, setTreinos] = useState([]);
    const [ listaVazia, setListaVazia] = useState(false)
    
    useEffect(() => { listar(); }, [])
    function listar(props) {
        console.log("Requisição está sendo feita: ");
        nomeFiltrado.map((item) => {
            const treinos = api.get(`${item.item}`)
            treinos
                .then(function (respostaObtida) {
                    console.log(respostaObtida.data);
                    setTreinos(respostaObtida.data);
                    setListaVazia(true);


                })

                .catch((errorOcorrido) => {
                    console.log("Lista nao carregada")
                    console.log(errorOcorrido)
                    setListaVazia(false)
                });
        })

    }


    function checarLista() {
        if (listaVazia) {
            return treinos.map((treinos, index) => {
                return (
                    <CardExercicio key={treinos.id}
                        nome={treinos.nome}
                        descricao={treinos.descricao}
                        imagem={treinos.imagem}
                        favoritado={treinos.favoritado}
                    />
                );
            })
        }else{
            return <CriarTreino/>
        }

    }


return (
    <>
        <div className="identificacaoModal">{nomeFiltrado.map((item) =>
            <h1>{item.title}</h1>
        )}

        </div>
        <div className="modal">
            {
               checarLista()
            }
        </div>


    </>
)


}





export default ModalUser