import ImagemLogo from '../../assets/images/logo/logoBefit.png'
import PersistentDrawerLeft from '../SideBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function Header() {
  return (<>
    <div className="header">
      <nav className='navHeader'>
        <div className="container">
          <Link to="/home"> <img src={ImagemLogo} className="logo" /> </Link>
          <div className='options'>
            <ul>
              <li> <Link to="/" > <a className="activeButton">Home</a></Link></li>
              <li> <Link to="/signin"> <a>Exercícios</a></Link></li>
              <li> <Link to="/sobre"><a>Sobre</a></Link></li>
              <li> <Link to="/signin"> <a className='loginButton'>Começar</a> </Link></li>
            </ul>
            <PersistentDrawerLeft />

          </div>
        </div>
      </nav>
    </div>
  </>);
}

export default Header;
