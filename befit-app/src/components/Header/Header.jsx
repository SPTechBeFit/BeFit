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
  const [arqExport] = useState()
  
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

  function headerSair(){

    switch(pageAtual){

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

  function headerVoltar(){
    switch (pageAtual) {
      case'/usuario/criar/treinos':
        return true

      case '/treino/*':
        return true 

      case `/dietas/${sessionStorage.getItem('idDieta')}`:
      return true  
    
      default:
        return false
    }
  }

  function headerPagHome(){
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

      case `/treino/*`:
        return false
       
      case `/dietas/${sessionStorage.getItem('idDieta')}`:
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
      
      case `/dietas/${sessionStorage.getItem('idDieta')}`:
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


  function handleExport() {
    fetch(`http://localhost:8080/dietas/exportar/${sessionStorage.getItem("idDieta")}`, arqExport, {
        method: 'GET',
        headers: {
            'Content-Type': 'text/form-data',
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
            // Create blob link to download
            const url = window.URL.createObjectURL(
                new Blob([blob]),
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `Dieta.txt`,
            );
            document.body.appendChild(link);
            link.click();

        })
        .catch((errorOcorrido) => {
            console.log(arqExport)
            console.log(errorOcorrido)
        })


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
              {headerChange() && headerPagHome() && <li id='home'> <NavLink to="/" end> Home</NavLink></li>}
              {/* <li> <NavLink to="/exerciciosHome" activeClassName="active"> <a>Exercícios</a></NavLink></li> */}
              {headerPagHome() && headerChange() && <li id='sobre'> <NavLink to="/sobre" >Sobre</NavLink></li>}
              {headerPagHome() && <li id='comecar'> <NavLink to="/signin"> Começar </NavLink></li>}   
              {headerChangeUserPage() && headerVoltar() && <li> <button className='btn-voltar-pag' onClick={() => navigate(-1)}>Voltar</button></li>}
              {headerChangeUserPage() && headerHotSite() && <li>  <span className='user'>Olá {sessionStorage.getItem("nome")}!</span></li>}
              {headerHotSite() && <li> <button className='btn-hot-site'>  <NavLink to="/hotsite">HotSite</NavLink></button></li>}
              {headerChangeUserPage() && headerSair() && <li> <button className='btn-sair' onClick={handleLogOut}>Sair</button></li>}
              {headerChangeUserPage() && <button id="botao-import-export" onClick={() => handleExport()}>Exportar</button>}
            </ul>
            <PersistentDrawerLeft />
          </div>
        </div>
      </nav>
    </div>
  </>);
}

export default Header;







