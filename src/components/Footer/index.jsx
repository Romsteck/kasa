import LogoWhite from '../../assets/Logo_White.svg'
import './index.scss'

export default function Footer() {
    return(
        <div className="footer_container">
            <img src={LogoWhite} alt="Logo du footer" />
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}