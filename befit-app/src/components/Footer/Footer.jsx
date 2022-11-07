import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import "./style.css"

function Footer() {
    return (
        <>
            <div className="container-footer">
                <div className="logo-footer">
                    <h1>BEFIT</h1>
                </div>
                <div className="options-footer">
                    <ul>
                        <li> <Link link to ="/" ><a>Home</a></Link></li>
                        {/* <li> <Link link to ="/signin" ><a>Exercicios</a></Link></li> */}
                        <li> <Link link to ="/sobre" ><a>Sobre</a></Link></li>
                        <li> <Link link to ="/signin" ><a>Começar</a></Link></li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Footer;