
import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'

function EmptyModal() {
    const navigate = useNavigate();
    return (
        <>
            <div className="modalVazio">
                <div className="modalVazioTexto">
                    <h1>Nenhum item favoritado por aqui</h1>
                </div>

                <div className="buttons">
                    <button className="btn-redirect-item" onClick={() => navigate(-1)}> voltar </button>
                </div>
            </div>
        </>
    )
}

export default EmptyModal