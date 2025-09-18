import HomeLogo from '../assets/LOGO.png'
import {Link} from 'react-router-dom'


function Header () {
  return (
  <nav>
    <Link to ="/">
      <img src = {HomeLogo} alt = "Logo Kasa"/>
    </Link>
    <div>
      <Link to ='/'>
      Accueil
      </Link>
      <Link to ='/About'>
      A Propos
      </Link>
    </div>
  </nav>
  )
}

export default Header