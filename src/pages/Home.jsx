import BannerHome from "../assets/BannerHome.png"
import Banner from "../components/Banner/Banner"

function Home (){
  return (
      <Banner 
        BannerImg={BannerHome}
        Text ="Chez vous, partout et ailleurs"
      />
      
  )
}
export default Home