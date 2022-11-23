
import axios from "axios"
import React, { useEffect, useState } from "react"
import api from '../../services/api.js'
import CardDieta from "../CardDieta/index.jsx"
import CardExercicio from '../CardExercicio/index'




function ModalUser(props) {
    
   
    return (
        <>
           
            <div className="modal-user">
               
               {
                props.children
               }
            </div>


        </>
    )


}





export default ModalUser