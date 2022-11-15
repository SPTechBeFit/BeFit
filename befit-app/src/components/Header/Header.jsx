import ImagemLogo from '../../assets/images/logo/logoBefit.png'
import PersistentDrawerLeft from '../SideBar'
import style from './style.css'
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import axios from 'axios';
function Header(props) {

  const pageAtual = (window.location.pathname);

  function headerChange() {
    switch (pageAtual) {
      case '/usuario/exercicios':
        return false


      case '/usuario/meustreinos':
        return false


      case '/usuario/criar/treinos':
        return false


      case '/usuario/dietas':
        return false


      default:
        return true

    }

  }

  function headerChangeUserPage() {
    switch (pageAtual) {
      case '/usuario/exercicios':
        return true


      case '/usuario/meustreinos':
        return true


      case '/usuario/criar/treinos':
        return true


      case '/usuario/dietas':
        return true


      default:
        return false

    }
  }



  return (<>

    <div className="header">
      <nav className='navHeader'>
        <div className="container">
          <Link to="/"> <img src={ImagemLogo} className="logo" /> </Link>
          <div className='options'>
            <ul>
              <li> <NavLink to="/" activeclassName="active" end> <a>Home</a></NavLink></li>
              {/* <li> <NavLink to="/exerciciosHome" activeClassName="active"> <a>Exercícios</a></NavLink></li> */}
              {headerChange() && <li> <NavLink to="/sobre" activeclassName="active"><a>Sobre</a></NavLink></li>}
              {headerChange() && <li> <NavLink to="/signin"> <a>Começar</a> </NavLink></li>}
              {headerChangeUserPage() && <li>  <a className='user'>Olá {props.nome} !</a></li>}
              {headerChangeUserPage() && <li> <a>Sair</a></li>}
            </ul>
            <PersistentDrawerLeft />
          </div>
        </div>
      </nav>
    </div>
  </>);
}

export default Header;







