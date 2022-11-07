import ImagemLogo from '../../assets/images/logo/logoBefit.png'
import PersistentDrawerLeft from '../SideBar'
import style from './style.css'

import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
function Header() {
  return (<>

    <div className="header">
      <nav className='navHeader'>
        <div className="container">
          <Link to="/"> <img src={ImagemLogo} className="logo" /> </Link>
          <div className='options'>
            <ul>
              <li> <NavLink to="/" activeClassName="active" end> <a>Home</a></NavLink></li>
              {/* <li> <NavLink to="/exerciciosHome" activeClassName="active"> <a>Exercícios</a></NavLink></li> */}
              {teste() && <li> <NavLink to="/sobre" activeClassName="active"><a>Sobre</a></NavLink></li>}
              {teste() && <li> <NavLink to="/signin"> <a className='loginButton'>Começar</a> </NavLink></li>}
             
            </ul>
            <PersistentDrawerLeft />
          </div>
        </div>
      </nav>
    </div>
  </>);
}

export default Header;


function teste() {
  if (window.location.pathname === '/exercicios') {
    return false
  } else {
    return true
  }


}
