import { Link } from "react-router-dom"
import './index.scss'

export default function NotFound() {

    return(
        <div className="not_found_container">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}