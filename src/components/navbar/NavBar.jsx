import Shifts from "../shifts/Shifts";
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
    // Suponiendo que tenemos un hook que le pega a una API para traer los turnos del usuario
    const turnos = 3
    return (
        <nav>
            <h1>CenTurOn - Central de Turnos Online</h1>
            <ul>
                <li>
                    <Link to="/proyecto-react-central-de-turnos/">Inicio</Link>
                </li>
                <li>
                    <Link to="/proyecto-react-central-de-turnos/servicios">Servicios</Link>
                </li>
                <li>
                    <Link to="/proyecto-react-central-de-turnos/especialidades">Especialidades</Link>
                </li>
                <li>
                    <Link to="/proyecto-react-central-de-turnos/nosotros">Nosotros</Link>
                </li>
                <li><Shifts turnos={turnos}/></li>
            </ul>
        </nav>
    );
}

export default NavBar;