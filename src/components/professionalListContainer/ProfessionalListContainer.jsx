import PropTypes from 'prop-types';
import './ProfessionalListContainer.css';

const Grid = ({ data }) => {
    return (
        <div className="grid-container">
            {data.map((item, index) => (
                <div key={index} style={{
                    border: '1px solid',
                    padding: '10px',
                }}>
                    <h2>{item.titulo}</h2>
                    <p>{item.descripcion}</p>
                    <img src={item.imagen} alt={item.titulo} style={{
                        width: '100%',
                        height: '200px',
                    }} />
                </div>
            ))}
        </div>
    );
};

export default Grid;

Grid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    })).isRequired,
};