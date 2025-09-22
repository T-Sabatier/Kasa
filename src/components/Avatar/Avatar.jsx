import "./Avatar.style.scss"

function Avatar ({host}) {
return (
  <div className = "avatar">
    <div className = "avatar__name">{host.name}</div>
    <img className = "avatar__picture" src ={host.picture} alt = {host.name} />
  </div>

)
}

export default Avatar