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
import PagExercicios from "../pages/Usuario/PagExercicios/index.jsx"
import NotFound from "../pages/NotFound/index.jsx"

import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";


const RoutesApp = () => {


    return (

        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/sobre/dietas" element={<SobreDietas />} />
                    <Route path="/exerciciosHome" element={<SobreExercicios />} />
                    <Route path="/usuario/exercicios" element={<UserExercicios />} />
                    <Route path="/usuario/meustreinos" element={<UserExercicios />} />
                    <Route path="/usuario/criar/treinos" element={<UserExercicios />} />
                    <Route path="/usuario/dietas" element={<UserExercicios />} />
                    <Route path="/treino/" element={<PagExercicios />} />

                    {/* <Route path="/exercicios" element={<Private Item={Exercicios} />} /> */}
                </Routes>
            </Fragment>

        </BrowserRouter>
    )
}
export default RoutesApp;