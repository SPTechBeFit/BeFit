
import style from './style.css'
import menuImage from '../../assets/images/logo/menuIconWhite.jpg'

import React, { useState } from 'react';
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
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} activeClassName={item.activeClassName}>
                <NavLink to={item.path}>
                  <a>{item.title}</a>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default MenuUser;