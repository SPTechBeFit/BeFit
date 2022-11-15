
import ListaExercicios from './Components/lista'
import axios from "axios";
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

function PagExercicios(props) {

    return (
        <>
            <ListaExercicios />
        </>
    )
}

export default PagExercicios