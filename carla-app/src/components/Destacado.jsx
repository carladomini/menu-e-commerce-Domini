import React from "react";
import imagen from "./images/fondo.png";

const Destacado = () => {
    return (
        <div className="text-center">
          <img src={imagen} alt="Fondo" className="img-fluid"/>   
        </div> 
    )
}

export default Destacado;