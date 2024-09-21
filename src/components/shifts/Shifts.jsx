import { FaStethoscope } from 'react-icons/fa';
import { useState } from 'react';

const Shifts = () => {
    const [shifts, setShifts] = useState([]);

    const handleClick = () => {
        if (shifts.length === 0) {
            alert('No tiene turnos');
        } else {
            alert(`Tiene ${shifts.length} turnos`);
        }
    };

    return (
        <div className="navbar-item" onClick={handleClick} style={{ cursor: 'pointer' }}>
            <FaStethoscope />
            <span>{shifts.length}</span>
        </div>
    );
};

export default Shifts;