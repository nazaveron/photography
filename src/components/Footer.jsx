import './footer.css'
import InstaIcon from '../assets/instagram-icon.svg'

const Footer = () => {
    return (
        <footer>
            <p>Seguinos en Instagram</p>
            <a href="https://www.instagram.com"><img src={InstaIcon} alt="" className='footer-img' /></a>
            <p>Estamos en Av. Sta. Fe 1860, C1123 CABA</p>
        </footer>
    )
}

export default Footer
