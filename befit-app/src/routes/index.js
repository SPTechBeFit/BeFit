import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home.jsx'
import Sobre from '../../src/pages/Sobre/Sobre.jsx'
import SobreDietas from '../../src/pages/Sobre/SobreDietas.jsx'
import SobreExercicios from '../../src/pages/Sobre/sobreExercicios.jsx'
import Signin from '../pages/Signin/index.jsx'
import Signup from '../../src/pages/Singup/index.jsx'
import { Fragment } from "react";
import useAuth from "../hooks/useAuth";
import UserExercicios from "../pages/Usuario/TreinoUsuario/TreinoUsuario.jsx"
import UserTreinos from "../pages/Usuario/MeusTreinos/MeusTreinos.jsx"



const RoutesApp = () => {
    return (

        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/sobre" element={<Sobre />} />
                    <Route exact path="/signin" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route exact path="/sobre/dietas" element={<SobreDietas />} />
                    <Route exact path="/exerciciosHome" element={<SobreExercicios />} />
                    <Route exact path="/usuario/exercicios" element={<UserExercicios />} />
                    <Route exact path="/usuario/meustreinos" element={<UserExercicios />} />
                    

                    {/* <Route path="/exercicios" element={<Private Item={Exercicios} />} /> */}
                </Routes>
            </Fragment>

        </BrowserRouter>
    )
}
export default RoutesApp;