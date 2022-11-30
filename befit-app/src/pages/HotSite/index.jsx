import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./style.css";
import Modal from "react-modal";
import axios from "axios";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";



function HotSite() {
  const navegar = useNavigate();
  
  const [arqImport, setArqImport] = useState();
  const pageAtual = (window.location.pathname);
  function handleImport() {
    axios
      .post(
        `http://localhost:8080/dietas/importar/${sessionStorage.getItem(
          "personId"
        )}`,
        arqImport,
        {
          headers: {
            "Content-Type": "text/form-data",
          },
        }
      )
      .then(function (res) {
        console.log(res);
        swal({
          title: "Dieta Importada com sucesos!",
          icon: "success",
        });
        navegar("/usuario/dietas")
        

      })
      .catch((errorOcorrido) => {
        console.log(errorOcorrido);
      });
  }

  return (
    <>
      <Header />

{
    console.log(pageAtual)
}
      <div className="hotsite-container">
        <Modal isOpen={true} contentLabel="import-file">
          <h2 className="title-modal">Importe o seu arquivo</h2>
          <div className="content">
            <input className="input-file"
              type="file"
              onChange={(e) => setArqImport(e.target.files[0])}        
            />
            <button id="botao-import-export" onClick={() => handleImport()}>
              Importe
            </button>
          </div>
        </Modal>
      </div>

      <Footer />
    </>
  );
}

export default HotSite;
