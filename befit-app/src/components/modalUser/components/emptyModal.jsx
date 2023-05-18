
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'



function EmptyModal() {


    const [pageAtual, setPageAtual] = useState(window.location.pathname);
    const [navigate, setNavigate] = useState("");
    let path = ""
    const navegar = useNavigate();

    function verificarRotaVoltar() {
        if (pageAtual === '/usuario/minhasdietas') {
            path = '/usuario/dietas'
            navegar(path)
            window.location.reload(false)
        } else {
            path = '/usuario/exercicios'
            navegar(path)
            window.location.reload(false)
        }


    }



    return (
        <>

            <div className="modalVazio">
                <div className="modalVazioTexto">
                    <h1>Nenhum item favoritado por aqui</h1>
                </div>

                <div className="buttons">
                    <button className="btn-redirect-item" onClick={() => { verificarRotaVoltar() }}> voltar </button>
                </div>
            </div>
        </>
    )
}

export default EmptyModal