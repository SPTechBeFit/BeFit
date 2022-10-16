import ImagemLogo from '../assets/images/logo/logoBefit.png'
import PersistentDrawerLeft from './SideBar'
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

function Header() {
  return (<>
    <div className="header">
      <nav className='navHeader'>
        <div className="container">
          <img src={ImagemLogo} className="logo" />
          <div className='options'>
            <ul>
              <li><a className="activeButton" href="#">Home</a></li>
              <li><a href="#">Exercícios</a></li>
              <li><a href="#">Sobre</a></li>
              <li><a className='loginButton' href="#">Começar</a></li>
            </ul>
            <PersistentDrawerLeft />

          </div>
        </div>
      </nav>
    </div>
  </>);
}

export default Header;
