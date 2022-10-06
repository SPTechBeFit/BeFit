import ImagemLogo from '../assets/images/logo/logoBefit.png'

function Header() {
  return(<>
    <header>
        <div className="innerHeader">
          <img src={ImagemLogo}  className="logo" />
          <nav className="options">
            <a className="active" href="#">Começar</a>
            <a href="#">Sobre</a>
            <a href="#">Exercícios</a>
            <a href="#">Home</a>
          </nav>
        </div>
      </header>
  </>);
}

export default Header;
