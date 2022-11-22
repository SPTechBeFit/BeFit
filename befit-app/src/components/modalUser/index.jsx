
import axios from "axios"
import React, { useEffect, useState } from "react"
import api from '../../services/api.js'
import CardExercicio from '../CardExercicio/index'




function ModalUser(props) {
    
    const titulos = [
        {
            id: 1,
            title: 'Pesquisar treinos',
            item: `/catalogo/${sessionStorage.getItem("personId")}`
        },
        {
            id: 2,
            title: 'Meus Treinos',
            item: `/favoritos/${sessionStorage.getItem("personId")}`
        },
        {
            id: 3,
            title: 'Criar Treinos',
            item: '/exercicios'
        },
        {
            id: 4,
            title: 'Dietas',
            item: ''
        }
    ]

    const pageAtual = (window.location.pathname);


    const nomeFiltrado = titulos.filter(titulos => {
        switch (pageAtual) {
            case '/usuario/exercicios':
                return titulos.title === 'Pesquisar treinos' && titulos.item === `/catalogo/${sessionStorage.getItem("personId")}`;
            case '/usuario/meustreinos':
                return titulos.title === 'Meus Treinos' && titulos.item === `/favoritos/${sessionStorage.getItem("personId")}`;
            case '/usuario/criar/treinos':
                return titulos.title === 'Criar Treinos' && titulos.item === '/exercicios';
            case '/usuario/dietas':
                return titulos.title === 'Dietas' && titulos.item ===  `/catalogo/${sessionStorage.getItem("personId")}`;
            default:
                console.log('Mudando titulos');

        }
    });
    const [treinos, setTreinos] = useState([]);
    const [listaCarregada, setListaCarregada] = useState(false)

    useEffect(() => { listar(); }, [])
    function listar(props) {
        console.log("Requisição dos treinos está sendo feita: ");
        console.log(sessionStorage.getItem("personId"))
        nomeFiltrado.map((item) => {
            const treinos = api.get(`${item.item}`)

            treinos
                .then(function (respostaObtida) {
                    console.log(respostaObtida.data);
                    setTreinos(respostaObtida.data);
                    setListaCarregada(true);
                    console.log(`${item.item}`)
                })
                .catch((errorOcorrido) => {
                    console.log("Lista nao carregada")
                    console.log(errorOcorrido)
                    setListaCarregada(false)
                    console.log(treinos)
                });
        })

    }


    function checarLista() {
        console.log('lista carregada? ', listaCarregada)
        if (listaCarregada) {
            return treinos.map((treinos, index) => {
                return (
                    <CardExercicio key={treinos.id}
                        id={treinos.id}
                        nome={treinos.nome}
                        descricao={treinos.descricao}
                        imagem={treinos.imagem}
                        favoritado={treinos.favoritado}
                    />
                );
            })
        }

    }

    return (
        <>
            <div className="identificacaoModal">{nomeFiltrado.map((item) =>
                <h1>{item.title}</h1>
            )}

            </div>
            <div className="modal-user">
                {
                    checarLista()
                }
            </div>


        </>
    )


}





export default ModalUser