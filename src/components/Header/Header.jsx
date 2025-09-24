import HomeLogo from "../../assets/LOGO.png";
import { NavLink } from "react-router-dom";
import "./Header.style.scss";

function Header() {
  return (
    <nav className="header">
      <NavLink to="/">
        <img src={HomeLogo} alt="Logo Kasa" />
      </NavLink>
      <div className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link--active" : ""}`
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            `header__link ${isActive ? "header__link--active" : ""}`
          }
        >
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
