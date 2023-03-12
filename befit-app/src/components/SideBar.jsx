import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ImagemMenu from '../assets/images/logo/menuIcon.png'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


var rota = 'http://54.147.103.96';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});



export default function SwipeableTemporaryDrawer() {
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

      case '/treino/*':
        return true

      default:
        return false

    }
  }

  const classes = useStyles();
  const [state, setState] = React.useState({ right: false, });
  const handleLogOut = () => {
    axios.patch(`${rota}:8080/usuarios/logout/${sessionStorage.getItem("personId")}`)
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >





      <List>
        {[
          <>
            {headerChange() && <li> <Link to="/" > <a>Home</a></Link></li>}
            {/* <li> <Link to="/exerciciosHome" activeClassName="active"> <a>Exercícios</a></Link></li> */}
            {headerChange() && <li> <Link to="/sobre" ><a>Sobre</a></Link></li>}
            {headerChange() && <li> <Link to="/signin"> <a>Começar</a> </Link></li>}
            {headerChangeUserPage() && <li>  <a className='user'>Olá {sessionStorage.getItem("nome")}!</a></li>}
            {headerChangeUserPage() && <li> <Link onClick={() => navigate(-1)}>Voltar</Link></li>}
            {headerChangeUserPage() && <li> <Link onClick={handleLogOut}>Sair</Link></li>}
          </>
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>

          <Button onClick={toggleDrawer(anchor, true)}><img className='sideMenuButtonImg' src={ImagemMenu} /></Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
