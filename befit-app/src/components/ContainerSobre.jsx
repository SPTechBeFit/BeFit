import BannerSobre from '../assets/images/banners/bannerSobre.png'
import FooterApp from '../assets/images/banners/bannerApp.png';


function ContainerSobreExercicios() {
    return (
        <>
            <div className="container-sobre">
                <img src={BannerSobre} alt="Sobre nos" className='banner-sobre' />
                <div className="texto-sobre">
                    <p>
                        Temos como objetivo influenciar as pessoas,
                        e ajuda las a alcançar suas metas de peso e nutrição de maneira fácil e intuitiva.
                        Fornecendo informacoes de dieta e treino de acordo com sua necessidade.
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
                    <p>
                        O usuário também terá permissão para criar seus treinos
                        e suas dietas e compartilhar com nossa comunidade para que outros usuários consigam utilizar.
                    </p>
                </div>

                <div className="footer-app">
                    <img src={FooterApp}  className='footerBanner' alt="Em breve: APP Befit" />
                </div>
            </div>

        </>
    )
}


export default ContainerSobreExercicios;