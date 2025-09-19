import BannerAbout from "../assets/BannerAbout.png"
import Banner from "../components/Banner/Banner"
import Collapse from "../components/Collapse/Collapse"

function About (){
  return (
    <div>
    <Banner
      BannerImg={BannerAbout}
      Text=""
      />
    <Collapse CollapseTitle = "Fiabilité" CollapseContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
    <Collapse CollapseTitle = "Respect" CollapseContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
    <Collapse CollapseTitle = "Service" CollapseContent="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."/>
    <Collapse CollapseTitle = "Sécurité" CollapseContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
    </div>
  )
}

export default About