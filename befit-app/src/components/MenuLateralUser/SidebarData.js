import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Treinos',
    path: '/exercicios',
    cName: 'nav-text',
    activeClassName: 'active'
  },
  {
    title: 'Meus Treinos',
    path: '/meusTreinos',
    cName: 'nav-text',
    activeClassName: 'active'
  },
  {
    title: 'Criar Treinos',
    path: '/criar/treinos',
    cName: 'nav-text',
    activeClassName: 'active'
  },
  {
    title: 'Dietas',
    path: '/criar/dietas',
    cName: 'nav-text',
    activeClassName: 'active'
  }
];