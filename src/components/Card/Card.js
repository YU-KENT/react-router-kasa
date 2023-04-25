import font from '../../assets/font.png'
import { Link } from 'react-router-dom'


function Card({id, title, location}){

return (
  
  <Link to ={`/logements/${id}`}>
  <div className=""  key={id} >
  <img src={font} alt=""></img>
  <span>{title}</span>
  <span>{location}</span>
  <span>{id}</span>
  </div>
  </Link>
)

}

export default Card