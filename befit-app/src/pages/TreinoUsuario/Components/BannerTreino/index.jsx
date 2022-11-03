import React from 'react'
import bannerTreino from '../../../../assets/images/banners/bannerPesquisaTreino.jpg'
import bannerStyle from "./bannerStyle.css"

const BannerTreino = () => {
  return (
    <div className='containerBanner'>
        <img src={ bannerTreino } className='bannerPesquisaTreino'/>
    </div>
  )
}


export default BannerTreino;
