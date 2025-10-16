import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import Styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <ul className={Styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaYoutube /></li>
      </ul>
      <p>Nosso Rodapé</p>
    </footer>
  )
}

export default Footer