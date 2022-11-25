
import React, { useEffect, useState } from "react"
import style from './style.css'



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