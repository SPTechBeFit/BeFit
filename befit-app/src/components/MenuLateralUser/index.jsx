
import style from './style.css'
import menuImage from '../../assets/images/logo/menuIconWhite.jpg'

import React, {useState}  from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';

function MenuUser() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <img src={ menuImage } onClick={showSidebar} alt="" id= "imagemMenu" />
        </div>
        <nav className={sidebar ? 'nav-menu ativado' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                //<li> <NavLink to="/"  activeClassName="active" end> <a>Home</a></NavLink></li>

                <li key={index} className={item.cName} activeClassName={item.activeClassName}>
                  <NavLink to={item.path}>
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default MenuUser;