import React, { useState } from "react";
import Modal from "react-modal"
import api from "../../../../services/api";
import "./style.css"

Modal.setAppElement("#root")

function ModalImport(){
    const [modalIsOpen, setIsOpen] = useState(false)
    const [arqImport, setArqImport] = useState()

    function abreModal() {
        setIsOpen(true)
    }

    function fechaModal() {
        setIsOpen(false)
    }

    function salvar(){
            api.post
            (`/dietas/importar/${sessionStorage.getItem("personId")}`, arqImport
            ).then(() => {
            console.log("Deu certo");
      });
    }
  return(
    <>
        <div className="modal-container">
            
            <div className="inner-container">

                <label className="title">Importe a sua dieta</label>
                
                <input type="file"
                       id="ipt"
                       onChange={(e) => setArqImport(e.target.value)}
                />

                <button onClick={() => salvar() && setIsOpen(false)} id="btn">Enviar</button>
                
            </div>    

        </div>

    </>
  )
}

export default ModalImport;