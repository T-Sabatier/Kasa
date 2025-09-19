import BannerHome from "../assets/BannerHome.png"
import Banner from "../components/Banner/Banner"
import Card from "../components/Card/Card"
import DataLogement from "../data/logements.json"

function Home (){
  return (
    <div>
      <Banner 
        BannerImg={BannerHome}
        Text ="Chez vous, partout et ailleurs"
      />
      <div className="cards">
        {DataLogement.map((logement)=> (    //{DataLogement.slice (0,6).map((logement)=> (
        <Card
        key={logement.id}
        id={logement.id}
        cover={logement.cover}
        title={logement.title}
        />
        ))}
      </div>
    </div>     
  )
}
export default Home