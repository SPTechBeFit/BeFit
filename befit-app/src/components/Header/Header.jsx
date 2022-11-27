import ImagemLogo from '../../assets/images/logo/logoBefit.png'
import PersistentDrawerLeft from '../SideBar'
import style from './style.css'
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link, NavLink } from 'react-router-dom'
import axios from 'axios';
import { Component } from 'react';
import swal from 'sweetalert';

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

  function headerSair() {

    switch (pageAtual) {

      case '/usuario/exercicios':
        return true

      case '/usuario/meustreinos':
        return true

      case '/usuario/dietas':
        return true

      case '/usuario/minhasdietas':
        return true

      default:
        return false
    }
  }

  function headerVoltar() {
    switch (pageAtual) {
      case '/usuario/criar/treinos':
        return true

      case `/treino/${sessionStorage.getItem("idTreino")}`:
        console.log(`/treino/${sessionStorage.getItem("idTreino")}`)
        return true

      default:
        return false
    }
  }

  function headerPagHome() {
    switch (pageAtual) {
      case '/usuario/exercicios':
        return false

      case `/treino/${sessionStorage.getItem("idTreino")}`:
        console.log(`/treino/${sessionStorage.getItem("idTreino")}`)
        return false

      case '/usuario/meustreinos':
        return false


      case '/usuario/criar/treinos':
        return false


      case '/usuario/dietas':
        return false

      case '/usuario/minhasdietas':
        return false

      case !'/treino/*':
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

      case `/treino/${sessionStorage.getItem("idTreino")}`:
        console.log(`/treino/${sessionStorage.getItem("idTreino")}`)
        return true

      default:
        return false

    }
  }

  function headerHotSite() {
    switch (pageAtual) {
      case '/usuario/exercicios':
        return true

      case '/usuario/meustreinos':
        return true

      case '/usuario/dietas':
        return true

      case '/usuario/minhasdietas':
        return true

      default:
        return false
    }


  }



  const handleLogOut = () => {

    swal({
      title: "Tem certeza que gostaria de sair?",
      text: "Você será deslogado do nosso site ",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          axios.patch(`http://localhost:8080/usuarios/logout/${sessionStorage.getItem("personId")}`)
            .then((res) => {
              console.log(res)
              var autenticado = sessionStorage.setItem("autenticado", false)
              console.log('usuario autenticado? ', `${sessionStorage.getItem("autenticado")}`)
              if (!autenticado) {
                sessionStorage.clear()
                navigate('/')
              } 
            })
            .catch(err => {
              console.log(err)
              console.log('erro no .logout')
            })
          swal("Poof! Você foi deslogado!", {
            icon: "success",
          });
        } else {
          swal("Obrigado por continuar no nosso site!");
        }
      });


  }

  return (<>

    <div className="header">
      <nav className='navHeader'>
        <div className="container">
          <Link to="/"> <img src={ImagemLogo} className="logo" alt='logo befit' /> </Link>
          <div className='options'>
            <ul>
              {headerChange() && headerPagHome() && <li id='home'> <NavLink to="/" end> Home</NavLink></li>}
              {/* <li> <NavLink to="/exerciciosHome" activeClassName="active"> <a>Exercícios</a></NavLink></li> */}
              {headerPagHome() && headerChange() && <li id='sobre'> <NavLink to="/sobre" >Sobre</NavLink></li>}
              {headerPagHome() && <li id='comecar'> <NavLink to="/signin"> Começar </NavLink></li>}
              {headerChangeUserPage() && headerVoltar() && <li> <button className='btn-voltar-pag' onClick={() => navigate(-1)}>Voltar</button></li>}
              {headerChangeUserPage() && headerHotSite() && <li>  <span className='user'>Olá {sessionStorage.getItem("nome")}!</span></li>}
              {headerHotSite() && <li> <button className='btn-hot-site'>  <NavLink to="/hotsite">HotSite</NavLink></button></li>}
              {headerChangeUserPage() && headerSair() && <li> <button className='btn-sair' onClick={handleLogOut}>Sair</button></li>}
            </ul>
            <PersistentDrawerLeft />
          </div>
        </div>
      </nav>
    </div>
  </>);
}

export default Header;







