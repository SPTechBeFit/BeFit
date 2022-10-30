import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Logo from "../assets/logo.png"
import Home from './Home'
import Sobre from './Sobre'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    text-decoration: none;
}
`
const Header = styled.section`
  background-color: #C2C2C2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div{
    display: flex;
    text-align: center;
    justify-content: center;
  }
`
const Log = styled.img`
   width: 18vw;
`
const Navigation = styled.nav`
  display: flex;
  margin-right: 4vw;
  align-items: center;
  p{
    display: flex;
    margin-left: 2vw;
    justify-content: center;
    align-items: center;
    font-size: 1.1em;
    width: 7vw;
    height: 3.9vh;
    transition: 0.3s;
    &:hover{
        background-color: #3B24AD;
        color: white;
    }
  }
`
export default class App extends React.Component{
    render(){
        return(
            <Router>
            <GlobalStyle/>
            <Header>
                <Log src={Logo} alt="logo"/>
                <div>
                 
                 <Navigation>
                        <Link to="/"><p>Home</p></Link>
                        <p>Exercicios</p>
                        <Link to="sobre"><p>Sobre</p></Link>
                        <p>Começar</p>
                 </Navigation>
                </div>
            </Header>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="sobre" element={<Sobre/>}/>
                </Routes>
            
            </Router>
        )
    }
}