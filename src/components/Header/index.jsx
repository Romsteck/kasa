import { NavLink } from "react-router-dom"
import Logo from '../../assets/Logo.svg'
import './index.scss'

export default function Header() {

    return(
        <div className="header_container">
            <img className="logo_container" src={Logo} />
            <nav>
                <NavLink className="link" to={'/'}>Accueil</NavLink>
                <NavLink className="link" to={'/about'}>À propos</NavLink>
            </nav>
        </div>
    )
}