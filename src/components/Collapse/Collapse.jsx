import {useState} from 'react'
import ArrowClose from "../../assets/arrowback.png"
import ArrowOpen from "../../assets/arrowopen.png"
import "./Collapse.style.scss"

function Collapse ({CollapseTitle, CollapseContent}){

  const [isOpen, setisOpen] = useState(false);

  return (
    <div className ="collapse">
    <h2 className ="collapse__title">{CollapseTitle} </h2>
    {isOpen && <p id = "Text" className ="collapse__content">{CollapseContent} </p>}
    <img className ="collapse__arrow" src = {isOpen ? ArrowOpen : ArrowClose}
     onClick={()=> setisOpen (!isOpen)}/>
    </div>
  )
}
export default Collapse