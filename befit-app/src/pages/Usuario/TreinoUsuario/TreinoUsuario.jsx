import Header from '../../../components/Header/Header.jsx'
import Footer from '../../../components/Footer/Footer.jsx';
import BannerTreino from '../BannerTreino/index.jsx';
import React, { useEffect, useState } from "react"
import ModalUser from '../../../components/modalUser/index.jsx';
import MenuUser from '../../../components/MenuLateralUser/index.jsx'
import style from '../style.css'
import styleBanner from '../BannerTreino/bannerStyle.css'


function TreinoUsuario(props) {
    const [opcoes, setOption] = useState(props.option);
    function listarModal() {
        const opcoes = (`teste`)
        opcoes                               // invocando o método "get" do axios utilizando a URL base instanciada em "api.js"
            .then(function (respostaObtida) {       // método get responde uma Promise que será resolvida, e quando obtiver uma resposta, cairá no "then" recebendo a resposta como parâmetro
                console.log(respostaObtida.data);   // exibindo o atributo "data", que possui o vetor de dados do objeto de resposta que foi recebido
                // utilizando o setter para alterar o valor do estado (useState) de "musicas"        
            })
            .catch((errorOcorrido) => {             // caso a requisição falhe, o "catch" pegará o erro, recebendo como parâmetro de uma função
                console.log(errorOcorrido)          // exibindo o erro que ocorreu na requisição
            });

    }
    return (
        <>
            <Header />
            <div className="bodyUser">
                <BannerTreino />
                <MenuUser />
                <ModalUser />
            </div>

        </>
    );




}

export default TreinoUsuario;   