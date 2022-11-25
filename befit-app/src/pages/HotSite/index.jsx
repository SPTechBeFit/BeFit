import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ModalImport from "./components/modalImport";
import "./style.css"

function HotSite(){
    
    function handleImport(){

    }

    return(
        <>
            <Header/>

            <div className="hotsite-container">
                <button id="botao-import-export">Importação</button>     
            </div>

            <Footer/>
        </>
    )
}

export default HotSite;