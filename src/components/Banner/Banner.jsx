import BannerHome from "../../assets/BannerHome.png";
import BannerAbout from "../../assets/BannerAbout.png";
import "./Banners.style.scss";

function Banner({ BannerImg, Text }) {
  return (
    <div className="banner">
      <img className="banner__img" src={BannerImg} alt="Banner" />
      <div className="banner__overlay"></div>
      <h1 className="banner__text">{Text}</h1>
    </div>
  );
}

export default Banner;
