import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import BannerTreino from './Components/BannerTreino/index.jsx';
import React, { useEffect, useState } from "react"
import ModalUser from '../../components/modalUser/index.jsx';
import MenuUser from '../../components/MenuLateralUser/index.jsx'
import style from './style.css'

function TreinoUsuario(props) {

    return (
        <>
            <Header />
            <MenuUser/>
            <div className="bodyTreinoUser">
                <BannerTreino />
                <ModalUser />
            </div>

        </>
    );




}

export default TreinoUsuario;   