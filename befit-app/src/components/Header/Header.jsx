import ImagemLogo from '../../assets/images/logo/logoBefit.png'
import PersistentDrawerLeft from '../SideBar'
import style from './style.css'
import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import axios from 'axios';
function Header(props) {

  const pages = [{
    title: 'pesquisar',
    source: '/usuario/exercicios'
  }]

  axios.get('http://localhost:8080/usuarios')
  const [nome, setNome] = useState("");
  return (<>

    <div className="header">
      <nav className='navHeader'>
        <div className="container">
          <Link to="/"> <img src={ImagemLogo} className="logo" /> </Link>
          <div className='options'>
            <ul>
              <li> <NavLink to="/" activeClassName="active" end> <a>Home</a></NavLink></li>
              {/* <li> <NavLink to="/exerciciosHome" activeClassName="active"> <a>Exercícios</a></NavLink></li> */}
              {headerChange() && <li> <NavLink to="/sobre" activeClassName="active"><a>Sobre</a></NavLink></li>}
              {headerChange() && <li> <NavLink to="/signin"> <a>Começar</a> </NavLink></li>}
              {headerChangeUserPage() && <li>  <a className='user'>Olá {localStorage["users_name{}"]}!</a></li>}
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


function headerChange() {
  if (window.location.pathname === '/usuario/exercicios') {
    return false
  } else {
    return true
  }
}

function headerChangeUserPage() {
  if (window.location.pathname === '/usuario/exercicios') {
    return true
  } else {
    return false
  }
}
