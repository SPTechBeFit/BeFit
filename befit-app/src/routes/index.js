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
//src\pages\Usuario\CriarTreino\Components\PagCriarTreino.jsx
import PagCriarTreinos from "../pages/Usuario/CriarTreino/PagCriarTreino"
import PagExercicios from "../pages/Usuario/PagExercicios/PagVerExercicios.jsx"

import PagDieta from "../pages/Usuario/PagDietas/PagVerDietas.jsx"
import NotFound from "../pages/NotFound/index.jsx"
import RequireAuth from '../components/requireAuth.jsx'
import HotSite from "../pages/HotSite/index.jsx";



const RoutesApp = () => {

    const Private = ({ Item }) => {
        const { signed } = useAuth();

        return signed > 0 ? <Item /> : <Signin />;
    };


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
                    <Route path="/hotsite" element={<RequireAuth> <HotSite /> </RequireAuth>} />
                    <Route path="/usuario/exercicios" element={<RequireAuth><UserExercicios /></RequireAuth >} />
                    <Route path="/usuario/meustreinos" element={<RequireAuth><UserExercicios /></RequireAuth >} />
                    <Route path="/usuario/minhasdietas" element={<RequireAuth><UserExercicios /></RequireAuth >} />

                    <Route path="/usuario/criar/treinos" element={<RequireAuth><PagCriarTreinos /></RequireAuth >} />
                    <Route path="/usuario/dietas" element={<RequireAuth><UserExercicios /></RequireAuth >} /> 
                    <Route path="/treino/*" element={<RequireAuth><PagExercicios /></RequireAuth >} />
                    <Route path="/dietas/*" element={<PagDieta />}/>


                    {/* <Route path="/exercicios" element={<Private Item={Exercicios} />} /> */}
                </Routes>
            </Fragment >

        </BrowserRouter >
    )
}
export default RoutesApp;