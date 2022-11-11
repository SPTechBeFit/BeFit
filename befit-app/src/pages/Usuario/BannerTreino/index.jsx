import React from 'react'
import bannerTreino from '../../../assets/images/banners/bannerPesquisaTreino.jpg'
import style from '../style.css'

const BannerTreino = () => {

  
  return (
    <div className='containerBanner'>
        <img src={ bannerTreino } className='bannerPesquisaTreino'/>
    </div>
  )
}
export default BannerTreino;
