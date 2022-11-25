import ImagemLogo from '../../assets/images/logo/logoBefit.png'
import PersistentDrawerLeft from '../SideBar'
import style from './style.css'
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, NavLink } from 'react-router-dom'
import axios from 'axios';
import { Component } from 'react';
function Header(props) {




  const pageAtual = (window.location.pathname);
  const navigate = useNavigate();
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

      case '/usuario/minhasdietas':
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

 case '/usuario/minhasdietas':
        return true

      case '/treino/*':
        return true

      default:
        return false

    }
  }

  function headerHotSite() {
    switch (pageAtual) {
      case '/hotsite':
        return false

      default:
        return true
    }


  }



  const handleLogOut = () => {
    axios.patch(`http://localhost:8080/usuarios/logout/${sessionStorage.getItem("personId")}`)
      .then((res) => {
        console.log(res)
        var autenticado = sessionStorage.setItem("autenticado", false)

        console.log('usuario autenticado? ', `${sessionStorage.getItem("autenticado")}`)
        if (!autenticado) {
          sessionStorage.clear()
          navigate('/')
          alert('usuario deslogado')
        }
      })
      .catch(err => {
        console.log(err)
        console.log('erro no .logout')
      })
  }

  return (<>

    <div className="header">
      <nav className='navHeader'>
        <div className="container">
          <Link to="/"> <img src={ImagemLogo} className="logo" alt='logo befit' /> </Link>
          <div className='options'>
            <ul>
              {headerChange() && headerHotSite() && <li> <NavLink to="/" end> Home</NavLink></li>}
              {/* <li> <NavLink to="/exerciciosHome" activeClassName="active"> <a>Exercícios</a></NavLink></li> */}
              {headerChange() && headerHotSite() && <li> <NavLink to="/sobre" >Sobre</NavLink></li>}
              {headerChange() && <li> <NavLink to="/signin"> Começar </NavLink></li>}   
              {headerChangeUserPage() && headerHotSite() && <li>  <span className='user'>Olá {sessionStorage.getItem("nome")}!</span></li>}
              {headerChangeUserPage() && headerHotSite() && <li> <button className='btn-voltar-pag' onClick={() => navigate(-1)}>Voltar</button></li>}
              {headerChangeUserPage() && headerHotSite() && <li> <button className='btn-sair' onClick={handleLogOut}>Sair</button></li>}
            </ul>
            <PersistentDrawerLeft />
          </div>
        </div>
      </nav>
    </div>
  </>);
}

export default Header;







