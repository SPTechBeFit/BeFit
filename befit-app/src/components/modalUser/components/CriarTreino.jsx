
import React, { useEffect, useState } from "react"
import style from './style.css'
import PagExercicios from "../../../pages/Usuario/PagExercicios/index"


function CriarTreino() {
    const [selecionado, setSelecionado] = useState ([])
    return (
        <>
        <div className="teste">
                <PagExercicios className="listaExercicios" />

    
            <div className="btn">

            </div>
        </div>

        </>
    )
}
export default CriarTreino