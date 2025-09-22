import Carousel from "../../components/Carousel/Carousel"
import Avatar from "../../components/Avatar/Avatar"
import Rating from "../../components/Rating/Rating"
import Tags from "../../components/Tags/Tags"
import DataLogement from "../../data/logements.json"
import Collapse from "../../components/Collapse/Collapse.jsx"
import Equipments from "../../components/Equipments/Equipments"
import Description from "../../components/Description/Description"
import {useParams} from 'react-router-dom'
import "./Logement.style.scss"

function Logement (){
  const {id} = useParams() 
  const logementFind = DataLogement.find(logement => logement.id ===id);

  return (
    <div>
    <Carousel pictures ={logementFind.pictures} />
    <div className ="logement_Detail">

    <div className ="logement_header"> 
      <div className="logement_principal">
        <h1 className="logement_title">{logementFind.title}</h1>
      </div>
    <Avatar  host ={logementFind.host}/>
    </div>

    <p className="logement_location">{logementFind.location}</p>

    <div className="logement_tags_rating">
    <Tags tags = {logementFind.tags} />
    <Rating rating = {logementFind.rating}/>
    </div>

    <div className ="logement_collapse">
    <Collapse className="collapse" CollapseTitle = "Equipements" CollapseContent = {<Equipments equipments={logementFind.equipments} />} />
    <Collapse className="collapse" CollapseTitle = "Description" CollapseContent = {<Description description={logementFind.description}/>} />
    </div>
    </div>
    </div>
    
  )
}

export default Logement