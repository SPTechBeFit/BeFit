import { BrowserRouter as Router, Routes, Route, Link, useNavigate} from 'react-router-dom'
import "./style.css"

function Footer() {

    const navigate = useNavigate();

    return (
        <>
            <div className="container-footer">
                <div className="logo-footer">
                    <h1>BEFIT</h1>
                </div>
                <div className="options-footer">
                    <ul>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/sobre")}>  Sobre</li>
                        <li onClick={() => navigate("/signin")}>Começar</li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Footer;