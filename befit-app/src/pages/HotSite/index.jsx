import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./style.css"

function HotSite(){
    
    // function handleImport()
    // function handleExport()

    return(
        <>
            <Header/>

            <div className="hotsite-container">
                <button id="botao-import-export">Importação</button>    
                <button id="botao-import-export">Exportação</button>    
            </div>

            <Footer/>
        </>
    )
}

export default HotSite;