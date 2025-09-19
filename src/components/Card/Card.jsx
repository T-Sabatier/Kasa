import { Link } from 'react-router-dom'
import "./Card.style.scss"

function Card ({id,title,cover}){
return (
<Link to= {`/logement/${id}`}>
<div className="card">
  <img className ="card__img" src = {cover} />
  <h2 className="card__title">{title}</h2>
</div>
</Link>
)
}

export default Card