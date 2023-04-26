import font from '../../assets/font.png'
import { Link } from 'react-router-dom'


function Card({id, title, location}){

return (
  
  <Link to ={`/logements/${id}`}>
  <div className=" logeCard"   >
  {/* <img src='' alt="logements"></img> */}
  <span className='position-absolute logeTitle'>{title}</span>
  <span className='position-absolute logeLocation'>{location}</span>
  </div>
  </Link>
)

}

export default Card