import React from 'react'
import bannerTreino from '../../../../assets/images/banners/bannerExercicio.jpg'
import bannerStyle from "./bannerStyle.css"

const BannerTreino = () => {
  return (
    <div className='containerBanner'>
        <img src={ bannerTreino } className='bannerPesquisaTreino'/>
    </div>
  )
}


export default BannerTreino;
