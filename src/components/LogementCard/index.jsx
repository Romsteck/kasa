import { Link } from 'react-router-dom'
import './index.scss'

export default function LogementCard({ id, cover, title }) { 
    return(
        <Link to={`/logement/${id}`} className='logement_container'>
            <img className='cover_photo' src={cover} alt="Photo de couverture d'un logement" />
            <div className="gradient"></div>
            <p className='title'>{title}</p>
        </Link>
    )
}