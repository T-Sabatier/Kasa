import BannerHome from '../../assets/BannerHome.png'
import BannerAbout from '../../assets/BannerAbout.png'
import "./Banners.style.scss"

function Banner ({BannerImg}) {
  return (
    <div className="banner">
      <img className="banner__img" src = {BannerImg}  />
      <div className="banner__overlay"></div>
      <h1 className="banner__text">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner