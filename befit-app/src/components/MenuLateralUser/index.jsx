
import style from './style.css'

import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SidebarData } from './SidebarData';


function MenuUser() {


  return (
    <>
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName} activeClassName={item.activeClassName} >
                <NavLink onClick={() => window.location.href = (`${item.path}`)}>
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