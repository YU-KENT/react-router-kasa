import { useParams } from "react-router-dom"
import { logementList } from "../../datas/logementList"
import Host from '../../components/Host/Host'
import { Icon } from '@iconify/react';
import Collapse from "../../components/Collapse/Collapse";
import '../../styles/SingleLogement.css'


function SingleLogement(){
    const {logementId} = useParams()
    const logementcurrent = logementList.find((logement)=> logement.id === logementId )
    const ranges = [1,2,3,4,5]
    const{cover,title,location,tags,rating,host,description,equipments }= logementcurrent
    
    return(
        <><div className='container text-center'>
            <img className='logementImg' src={cover} alt="photoLogements"></img>
        </div>
        <div className='container d-flex justify-content-between'>
             <div>
                 <h1>{title}</h1>
                  <span>{location}</span>
                  <div>
                  {tags.map((tag)=>(
                  <span className="tag px-4 py-0.5">{tag}</span>
                  ))}
                  </div>
             </div>
           <div>
              <div>
                <Host host ={host}  />
              </div>
              <div>
                  {ranges.map((rangeElem)=>
                  rating >= rangeElem ?
                  <span><Icon icon="ic:outline-star" color="#ff6060" width="25" height="25" /></span> :
                  <span><Icon icon="ic:outline-star" color="#e3e3e3" width="25" height="25" /></span>
                  )}
              </div>
           </div>
      </div>
      <div className="container">
        <div className="row justify-content-between ">
           <div className="col-5">{ Collapse('Description',description)}</div>
           <div className="col-5">{ Collapse('Equipments',equipments)}</div> 
        </div>
      </div> 
        
        </>
    )
}
export default SingleLogement