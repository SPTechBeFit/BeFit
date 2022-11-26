import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./style.css"
import Modal from "react-modal"
import axios from "axios";

Modal.setAppElement("#root")

function HotSite(){

    const [arqImport, setArqImport] = useState()
    
    function handleImport(){
        axios.post(`http://localhost:8080/dietas/importar/${sessionStorage.getItem("personId")}`, arqImport, {
            headers: {
                'Content-Type': 'text/form-data'
            }
        })
            .then(function(res){
                console.log(res)
                alert("Dieta salva com sucesso")
            })
            .catch((errorOcorrido) => {
                console.log(arqImport)
                console.log(errorOcorrido)
            })
    }

    return(
        <>
            <Header/>

            <div className="hotsite-container">
                <input type="file" onChange={(e) => setArqImport(e.target.files[0])}/>

                <button id="botao-import-export" onClick={() => handleImport()}>Importe</button>     
            </div>

            <Footer/>
        </>
    )
}

export default HotSite;