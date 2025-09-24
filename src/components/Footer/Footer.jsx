import FooterLogo from "../../assets/LogoFooter.png";
import "./Footer.style.scss";

function Footer() {
  return (
    <footer>
      <img src={FooterLogo} alt="LogoKasa" />
      <p>© 2020 Kasa. All rights reserved </p>
    </footer>
  );
}

export default Footer;
