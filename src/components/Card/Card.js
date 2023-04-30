import { Link } from 'react-router-dom'

function Card({cover,id, title, location}){

return (
  
  <Link to ={`/logements/${id}`}>
  <div className=" logeCard"   >
  <img src={cover} alt="logements"></img> 
  <span className='position-absolute CardTitle'>{title}</span>
  <span className='position-absolute CardLocation'>{location}</span>
  </div>
  </Link>
)

}

export default Card