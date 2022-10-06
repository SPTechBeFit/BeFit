import ImagemLogo from '../assets/images/logo/logoBefit.png'

function Header() {
  return (<>

    <div className="header">
      
        <nav className='navHeader'>
          <div className="container">
            <img src={ImagemLogo} className="logo" />
            <div className='options'>
              <ul>
                <li><a className="active" href="#">Home</a></li>
                <li><a href="#">Exercícios</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a className='loginButton' href="#">Começar</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="lateral-m">

        <div className="navMenu">
          <input type="checkbox" id="menu_lateral" className="input-menu" />

          <label htmlFor="menu_lateral">
            <div className="menu">
              <span className="hamburguer"></span>
            </div>
          </label>

          <label htmlFor="menu_lateral" className="botao-fechar">x</label>

          <div className="box-menu">
            <a href="" className="li-checked">Home</a>
            <a href="">Exercícios</a>
            <a href="">Sobre</a>
            <a href="">Começar</a>
          </div>
        </div>
      </div >
      </div>





  </>);
}

export default Header;
