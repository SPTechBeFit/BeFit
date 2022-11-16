import Header from '../../../components/Header/Header.jsx'
import Footer from '../../../components/Footer/Footer.jsx';
import BannerTreino from '../BannerTreino/index.jsx';
import React, { useEffect, useState } from "react"
import ModalUser from '../../../components/modalUser/index.jsx';
import MenuUser from '../../../components/MenuLateralUser/index.jsx'
import style from '../style.css'
import styleBanner from '../BannerTreino/bannerStyle.css'


function TreinoUsuario(props) {
  
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