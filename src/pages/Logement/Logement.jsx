import Carousel from "../../components/Carousel/Carousel"
import DataLogement from "../../data/logements.json"
import {useParams} from 'react-router-dom'

function Logement (){
  const {id} = useParams() 
  const logementFind = DataLogement.find(logement => logement.id ===id);

  return (
    <Carousel pictures ={logementFind.pictures} />
  )
}

export default Logement