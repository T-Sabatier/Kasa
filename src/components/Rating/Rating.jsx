import StarActive from "../../assets/star-active 1.png"
import StarInactive from "../../assets/star-inactive 1.png"

function Rating ({host}) {

  const range = [1,2,3,4,5]
return (
  <div className = "rating">
    {range.map ((rangeStar) =>
    <img 
    key={rangeStar}
    src ={rangeStar <= host.rating ? StarActive : StarInactive}
    alt ="star"
    />
)}   
  </div>
)
}

export default Rating