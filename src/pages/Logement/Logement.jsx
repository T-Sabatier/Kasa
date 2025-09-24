import Carousel from "../../components/Carousel/Carousel";
import Avatar from "../../components/Avatar/Avatar";
import Rating from "../../components/Rating/Rating";
import Tags from "../../components/Tags/Tags";
import DataLogement from "../../data/logements.json";
import Collapse from "../../components/Collapse/Collapse.jsx";
import Equipments from "../../components/Equipments/Equipments";
import Description from "../../components/Description/Description";
import { useParams, Navigate } from "react-router-dom";
import "./Logement.style.scss";

function Logement() {
  const { id } = useParams();
  const logementFind = DataLogement.find((logement) => logement.id === id);
  if (!logementFind) {
    return <Navigate to="/error" replace />;
  }

  return (
    <div>
      <Carousel pictures={logementFind.pictures} />
      <div className="logement_Detail">
        <div className="logement_header">
          <div className="logement_principal">
            <h1 className="logement_title">{logementFind.title}</h1>
            <p className="logement_location">{logementFind.location}</p>
            <Tags tags={logementFind.tags} />
          </div>

          <div className="logement_tags_rating">
            <Avatar host={logementFind.host} />
            <Rating rating={logementFind.rating} />
          </div>
        </div>

        <div className="logement_collapse">
          <Collapse
            className="collapse"
            CollapseTitle="Description"
            CollapseContent={
              <Description description={logementFind.description} />
            }
          />
          <Collapse
            className="collapse"
            CollapseTitle="Equipements"
            CollapseContent={
              <Equipments equipments={logementFind.equipments} />
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Logement;
