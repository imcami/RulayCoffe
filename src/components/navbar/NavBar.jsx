import React from "react";
import MagnifyGlass from "../../assets/svg/magnifyglass";
import "./NavBar.css";
import Cartsvg from '../../assets/svg/Cartsvg';
import { Link } from "react-router-dom";
const NavBar =  () =>{
    return (
    
        <div>
            
            <ul>
               <h1>Rulay Coffe</h1>
               <li><Link exact path="/Home">Home</Link></li>
               <li><Link exact path="/Menu">Menu</Link></li>
               <li><Link exact path="/Novedades">Novedades</Link></li>
               <li><Link exact path="/Contacto">Contacto</Link></li>
               <li><Link exact path="/Nosotros">Sobre Nosotros </Link></li>
               <li><Link exact path="/Buscar"><button><MagnifyGlass/></button></Link></li>
               <li><Link exact path="/Carrito"><button><Cartsvg/></button></Link></li>   
            </ul>
        </div>

    )}

export default NavBar;