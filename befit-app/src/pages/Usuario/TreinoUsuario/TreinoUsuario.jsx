import Header from '../../../components/Header/Header.jsx'
import Footer from '../../../components/Footer/Footer.jsx';
import BannerTreino from '../BannerTreino/index.jsx';
import React, { useEffect, useState } from "react"
import ModalUser from '../../../components/modalUser/index.jsx';
import MenuUser from '../../../components/MenuLateralUser/index.jsx'
import api from "../../../services/api"
import style from '../style.css'

import CardExercicio from '../../../components/CardExercicio/index.jsx';
import CardDieta from '../../../components/CardDieta/index.jsx';
import EmptyModal from "../../../components/modalUser/components/emptyModal"


function TreinoUsuario(props) {

    const [pageAtual, setPageAtual] = useState(window.location.pathname);
    const [treinos, setTreinos] = useState([]);
    const [dietas, setDieta] = useState([]);
    const [vazio, setVazio] = useState([]);
    const [listaCarregada, setListaCarregada] = useState(false)

    const titulos = [
        {
            id: 1,
            title: 'Pesquisar treinos',
            item: `/treinos/catalogo/${sessionStorage.getItem("personId")}`
        },
        {
            id: 2,
            title: 'Meus Treinos',
            item: `/treinos/favoritos/${sessionStorage.getItem("personId")}`
        },
        {
            id: 3,
            title: 'Criar Treinos',
            item: '/exercicios'
        },
        {
            id: 4,
            title: 'Dietas',
            item: `/dietas/catalogo/${sessionStorage.getItem("personId")}`
        },
        {
            id: 5,
            title: 'Minhas Dietas',
            item: `/dietas/favoritos/${sessionStorage.getItem("personId")}`
        }
    ]



    const nomeFiltrado = titulos.filter(titulos => {
        switch (pageAtual) {
            case '/usuario/exercicios':
                return titulos.title === 'Pesquisar treinos' && titulos.item === `/treinos/catalogo/${sessionStorage.getItem("personId")}`;
            case '/usuario/meustreinos':
                return titulos.title === 'Meus Treinos' && titulos.item === `/treinos/favoritos/${sessionStorage.getItem("personId")}`;
            case '/usuario/criar/treinos':
                return titulos.title === 'Criar Treinos' && titulos.item === '/exercicios';
            case '/usuario/dietas':
                return titulos.title === 'Dietas' && titulos.item === `/dietas/catalogo/${sessionStorage.getItem("personId")}`;
            case '/usuario/minhasdietas':
                return titulos.title === 'Minhas Dietas' && titulos.item === `/dietas/favoritos/${sessionStorage.getItem("personId")}`;
            default:
                console.log('Mudando titulos');

        }
    });

    useEffect(() => { listar(); }, [])
    function listar(props) {
        console.log(sessionStorage.getItem("personId"))

        nomeFiltrado.map((item) => {
            api.get(`${item.item}`)
                .then(function (respostaObtida) {
                    console.log(respostaObtida.data);
                    setTreinos(respostaObtida.data);
                    setDieta(respostaObtida.data)
                    setListaCarregada(true);
                })
                .catch((errorOcorrido) => {
                    console.log(errorOcorrido)
                    setListaCarregada(false)

                });
        })
        if(listaCarregada){
            console.log("lista carregada")
        }console.log("lista nao carregada")

    }
    return (
        <>
            <Header />
            <div className="bodyUser">
                <BannerTreino />
                <MenuUser />
                <ModalUser>
                    {
                        treinos ?
                            pageAtual === "/usuario/exercicios" || pageAtual === "/usuario/meustreinos" ? treinos.map((treinos, i) => {
                                return (
                                    <CardExercicio key={treinos.id}
                                        id={treinos.id}
                                        nome={treinos.nome}
                                        descricao={treinos.descricao}
                                        imagem={treinos.imagem}
                                        favoritado={treinos.favoritado}
                                    />
                                )
                            })
                            : dietas.map((dietas, i) => {
                                return (
                                    <CardDieta key={dietas.id}
                                        id={dietas.id}
                                        nome={dietas.nome}
                                        descricao={dietas.descricao}
                                        imagem={dietas.imagem}
                                        favoritado={dietas.favoritado}
                                    />
                                )
                            })
                            : <EmptyModal />
                        }
                </ModalUser>
            </div>

        </>
    );




}

export default TreinoUsuario;   