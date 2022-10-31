import Banner1 from '../assets/images/banners/Banner1.jpg';
import Banner3Exercicio from '../assets/images/banners/banner3.jpg';
import Banner4Dietas from '../assets/images/banners/banner4.jpg';
import Banner5Sobre from '../assets/images/banners/banner5.jpg';
import BotaoTreino from '../assets/images/buttons/treinosButton.jpg';
import BotaoDieta from '../assets/images/buttons/dietasButton.jpg';
import Button from '@material-ui/core/Button';
import FooterApp from '../assets/images/banners/bannerApp.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function ContainerHomePage() {
    return (
        <>
            <div className="container-home">

                <img src={Banner1} className='banner1-home' />
                <div className="container-home-texto">
                    <h1>Treinos <a>personalizados </a> para você</h1>
                </div>

                <div className="banner3-home">
                    <Link link to="/sobre/exercicios"><img src={Banner3Exercicio} className='banner3-exercicio-home' /></Link>
                    <Link link to="/sobre/dietas"> <img src={Banner4Dietas} className='banner4-dietas-home' /></Link>
                </div>
                <div className="banner4-home">
                    <img src={Banner5Sobre} className='banner5-sobre-home' />
                </div>

                <div className="container-home-texto">
                    <h1>SAIBA O QUE OFERECEMOS</h1>
                </div>

                <div className="container-opcoes">
                    <Link link to="/signin"><img className='exericioButton' src={BotaoTreino} /></Link>
                    <Link link to="/signin"><img className='dietaButton' src={BotaoDieta} /></Link>

                </div>

                <div className="container-home-texto">
                    <h1>Venha ser mais saudável</h1>
                    <button className='buttonComeceAgora'> Comece agora </button>
                </div>

                <div className="footer-app">
                    <img src={FooterApp} className='footerBanner' alt="Em breve: APP Befit" />
                </div>
            </div>



        </>
    );
    function teste() {
        return (
            <>

            </>
        )
    }
}




export default ContainerHomePage;



