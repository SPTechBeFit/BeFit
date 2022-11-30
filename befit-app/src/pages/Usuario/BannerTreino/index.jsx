import { React, useState } from 'react'
import style from '../style.css'
import imagens from './images'


function BannerTreino(props) {
  const [page, setPage] = useState(props.option);

  const imagens = [
    {
      id: 1,
      number: 1,
      title: 'Pesquisar treinos',
      image: 'bannerPesquisaTreino',
    },
    {

      id: 2,
      number: 2,
      title: 'Meus Treinos',
      image: 'bannerUser',
    },
    {

      id: 3,
      number: 3,
      title: 'Criar Treinos',
      image: 'bannerExercicio',
    },
    {
      id: 4,
      number: 4,
      title: 'Dietas',
      image: 'bannerDieta',
    },
    {
      id: 5,
      number: 5,
      title: 'Minhas Dietas',
      image: 'bannerDieta'
    }
  ]
  const pageAtual = (window.location.pathname);


  const imagemFiltrada = imagens.filter(imagens => {
    switch (pageAtual) {
      case '/usuario/exercicios':
        return imagens.title === 'Pesquisar treinos';


      case '/usuario/meustreinos':
        return imagens.title === 'Meus Treinos';


      case '/usuario/criar/treinos':
        return imagens.title === 'Criar Treinos';


      case '/usuario/dietas':
        return imagens.title === 'Dietas';

        
      case '/usuario/minhasdietas':
        return imagens.title === 'Minhas Dietas';


      default:


    }


  });
  return (
    <div className='containerBanner'>
      {imagemFiltrada.map((item) =>
        <div key={item.id}>
          <img
            src={require('../../../assets/images/banners/' + item.image + '.jpg')
            } className='bannerUser' alt={item.title} />
        </div>
      )
      }
    </div>
  )
}
export default BannerTreino;
