import BannerSobre from '../../assets/images/banners/bannerSobre.jpg'
import FooterApp from '../../assets/images/banners/bannerApp.jpg';


function ContainerSobreDietas() {
    return (
        <>
            <div className="container-sobre">
                <img src={BannerSobre} alt="Sobre nos" className='banner-sobre' />
                <div className="texto-sobre">
                    <p>
                        Um dos nossos objetivos é, além de sugerir treinos para nosso usuarios, sugerir também
                        dietas para serem seguidas, junto com os nossos treinos para um melhor resultado para 
                        seus treinos e sua saúde
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        Monitore o progresso de suas metas de nutrição, exercícios, perda de peso e consumo de água com o BeFit.
                        Usar este app multifuncional de saúde e monitor de alimentos é como ter um nutricionista,
                        um planejador de refeições e um diário de alimentação com você o tempo todo.
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                        O BeFit é mais que um site de dietas.
                        Ele é um site de saúde que te ajuda a aprender sobre seus hábitos,
                        ver como você come, fazer escolhas de alimentação mais inteligentes,
                        encontrar motivação e apoio, e alcançar suas metas.
                    </p>
                    <br></br>
                    <br></br>   
        
                </div>

                <div className="footer-app">
                    <img src={FooterApp}  className='footerBanner' alt="Em breve: APP Befit" />
                </div>
            </div>

        </>
    )
}


export default ContainerSobreDietas;