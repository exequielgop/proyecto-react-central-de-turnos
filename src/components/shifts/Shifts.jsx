import { FaStethoscope } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Shifts = (props) => {
    // const [shifts, setShifts] = useState(0);
    // setShifts(props.turnos);
    // const handleClick = () => {
    //     if (shifts.length === 0) {
    //         alert('No tiene turnos');
    //     } else {
    //         alert(`Tiene ${shifts.length} turnos`);
    //     }
    // };

    const [count, setCount] = useState(props.turnos);

    useEffect(() => {
    console.log('Count changed:', count)
    }, [count]);

    // Funcion agregada solo para darle funcionalidad al componente usando un dato pasado como prop
    const handleClick = () => {
    setCount(count + 1);
    };

    return (
        <div className="navbar-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <FaStethoscope />
            <span>{count}</span>
        </div>
    );
};

// Se valida el tipo de dato de la prop turnos para que no de error el linter
Shifts.propTypes = {
    turnos: PropTypes.number,
};

export default Shifts;