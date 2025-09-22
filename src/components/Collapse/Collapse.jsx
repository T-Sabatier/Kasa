import {useState} from 'react'
import ArrowClose from "../../assets/arrowback.png"
import "./Collapse.style.scss"

function Collapse ({CollapseTitle, CollapseContent}){

  const [isOpen, setisOpen] = useState(false);

  return (
    <div className ="collapse">
      <div className="collapse__header">
      <h2 className ="collapse__title">{CollapseTitle} </h2>
      <img
        src={ArrowClose}
        alt="flèche"
        className={`collapse__arrow ${isOpen ? "open" : ""}`} // ? est true (ajoute open) : sinon rien
        onClick={() => setisOpen(!isOpen)}
      />
    </div>
      <div 
        className={`collapse__content ${isOpen ? "open" : ""}`}>
        {CollapseContent}
      </div>
    </div>
    

  )
}
export default Collapse