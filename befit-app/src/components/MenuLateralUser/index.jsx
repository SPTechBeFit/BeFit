import React from 'react';
import style from './style.css'
import menuImage from '../../assets/images/logo/menuIconWhite.jpg'

function menuUser(){


    return(
        <>
        <div className="containerUserMenu">
            <img src={ menuImage } className='sideMenu' />
        </div>

        </>
    )
}

export default menuUser;