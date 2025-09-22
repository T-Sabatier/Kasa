import Carousel from "../../components/Carousel/Carousel"
import Avatar from "../../components/Avatar/Avatar"
import Rating from "../../components/Rating/Rating"
import DataLogement from "../../data/logements.json"
import {useParams} from 'react-router-dom'

function Logement (){
  const {id} = useParams() 
  const logementFind = DataLogement.find(logement => logement.id ===id);

  return (
    <div>
    <Carousel pictures ={logementFind.pictures} />
    <Avatar host ={logementFind.host}/>
    <Rating host = {logementFind}/>
    </div>
    
  )
}

export default Logement