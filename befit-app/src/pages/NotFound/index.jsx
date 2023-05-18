import React from "react";
import Header from '../../components/Header/Header.jsx'
import Footer from '../../components/Footer/Footer.jsx';
import Home from '../../pages/Home/Home.jsx'
import notFound from "../../assets/images/naoEncontrado.jpg"

import { BrowserRouter as Router, Routes, Route, Link, NavLink, useNavigate, useParams } from 'react-router-dom'
import style from "./style.css"


function NotFound() {

    const navegar = useNavigate();

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <div className="NaoEcontrado">

                <div className="mensagem" >

                    <h1>Isso é estranho...</h1>
                    <h2>Você não deveria estar aqui</h2>

                    <button onClick={() => navegar(-1)} className="btn-voltar">Voltar </button>
                        
                </div>



            </div>



            <Footer />
        </>
    )
}

export default NotFound
