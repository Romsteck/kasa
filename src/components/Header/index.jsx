import { Link } from "react-router-dom"
import Logo from '../../assets/Logo.svg'
import './index.scss'

export default function Header() {

    return(
        <div className="header_container">
            <img className="logo_container" src={Logo} />
            <nav>
                <Link className="link" to={'/'}>Accueil</Link>
                <Link className="link" to={'/about'}>À propos</Link>
            </nav>
        </div>
    )
}