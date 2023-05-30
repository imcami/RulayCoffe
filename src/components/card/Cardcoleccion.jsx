import React from "react";
import Heartsvg from "../../assets/svg/Heartsvg";
import Sharenetwork from "../../assets/svg/Sharenetwork";
const CardColeccion = ({coleccion}) => {
    return(
        <div className="card">
            <div className="card-body">
                <div><Heartsvg/></div>
                <div><Sharenetwork/></div>
                <img src={coleccion.img} alt={coleccion.nombre} />
                <h3>{coleccion.nombre}</h3>
                <p>{coleccion.descripcion}</p>  
                <span>{coleccion.precio}</span>
                <span>ranking</span>
                <button>Comprar</button>
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}


export default CardColeccion;