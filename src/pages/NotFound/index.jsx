import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='notFound_container'>
            <div className="hit-the-floor">
                404
            </div>
            <div className="notFound_text">
                <p>LA PÁGINA QUE ESTÁS BUSCANDO NO HA SIDO ENCONTRADA</p>
                <Link to={`/`}>
                    <button className='watch_video'>Volver al inicio</button>
                </Link>
            </div>
        </div>
    )
}

export { NotFound }