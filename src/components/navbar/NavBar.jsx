import React from 'react'
import Shifts from "../shifts/Shifts";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <h1>Central de Turnos CeTur</h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Especialistas</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><Shifts /></li>
            </ul>
        </nav>
    );
}

export default NavBar;