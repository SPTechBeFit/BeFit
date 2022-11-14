
import React, { useEffect, useState } from "react"
import api from '../../services/api.js'
import CardExercicio from '../CardExercicio/index'



function ModalUser(props) {

    const titulos = [
        {
            id: 1,
            title: 'Pesquisar treinos',
            teste: '/catalogo/5bb7a32c-20ff-42d2-b684-33bf61f6eb13'

        },
        {

            id: 2,
            title: 'Meus Treinos',
            teste: '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13'

        },
        {

            id: 3,
            title: 'Criar Treinos',
            teste: '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13'

        },
        {
            id: 4,
            title: 'Dietas',
            teste: '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13'

        }
    ]

    const pageAtual = (window.location.pathname);



    const nomeFiltrado = titulos.filter(titulos => {
        switch (pageAtual) {
            case '/usuario/exercicios':
                return titulos.title === 'Pesquisar treinos' && titulos.teste === '/catalogo/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            case '/usuario/meustreinos':
                return titulos.title === 'Meus Treinos' && titulos.teste === '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            case '/usuario/criar/treinos':
                return titulos.title === 'Criar Treinos' && titulos.teste === '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            case '/usuario/dietas':
                return titulos.title === 'Dietas' && titulos.teste === '/favoritos/5bb7a32c-20ff-42d2-b684-33bf61f6eb13';


            default:
                console.log('teste');

        }
    });



    const [treinos, setTreinos] = useState([]);
    useEffect(() => { listar(); }, [])
    function listar(props) {
        console.log("Requisição está sendo feita: ");
        nomeFiltrado.map((item) => {
            const treinos = api.get(`${item.teste}`)
            treinos
                .then(function (respostaObtida) {
                    console.log(respostaObtida.data);
                    setTreinos(respostaObtida.data);

                })

                .catch((errorOcorrido) => {
                    console.log(errorOcorrido)
                });

        })

    }
    return (
        <>
            <div className="identificacaoModal">{nomeFiltrado.map((item) =>
                <h1>{item.title}</h1>
            )}

            </div>
            <div className="modal">

                {
                    treinos.map((treinos, index) => {
                        return (

                            <CardExercicio
                                key={treinos.id}
                                id={treinos.id}
                                nome={treinos.nome}
                                descricao={treinos.descricao}
                                imagem={treinos.imagem}
                                favoritado={treinos.favoritado}
                            />
                        );
                    })
                }
            </div>


        </>
    )


}


export default ModalUser