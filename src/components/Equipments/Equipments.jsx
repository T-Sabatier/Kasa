import "./Equipment.style.scss";

function Equipments({ equipments }) {
  return (
    <ul className="equipments">
      {equipments.map((equipment, index) => (
        <li className="equipments__list" key={index}>
          {equipment}
        </li>
      ))}
    </ul>
  );
}
export default Equipments;
