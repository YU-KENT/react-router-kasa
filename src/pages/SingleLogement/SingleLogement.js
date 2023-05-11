import { useParams } from "react-router-dom"
import { logementList } from "../../datas/logementList"
import Host from '../../components/Host/Host'
import { Icon } from '@iconify/react';
import Collapse from "../../components/Collapse/Collapse";
import '../../styles/SingleLogement.css'
import ImageSlider from'../../components/ImageSlider/ImageSlider'
import Error from "../Error/Error";


function SingleLogement(){
    const {logementId} = useParams()
    const logementcurrent = logementList.find((logement)=> logement.id === logementId )
    const isIdsWrong = logementcurrent === undefined ? true : false

    if(isIdsWrong) { return(<Error/>) }
    else {
    const ranges = [1,2,3,4,5]
    const {title,location,tags,rating,host,description,equipments }= logementcurrent
    const slides = logementcurrent.pictures
    return(
        <>
        <div>
          <ImageSlider slides={slides}/>
        </div>
        <div className='logeInfo'>
             <div>
                 <h1 className="logeTitle">{title}</h1>
                  <span className="logeLocation">{location}</span>
                  <div className="row mt-4">
                  {tags.map((tag)=>(
                  <span className="tag" key={tag}>{tag}</span>
                  ))}
                  </div>
             </div>
             <div className="profiles">
              <div className="Host">
                <Host host ={host}  />
              </div>
              <div className="d-flex mt-3 etoiles">
                  {ranges.map((rangeElem)=>
                  rating >= rangeElem ?
                  <span className="etoile" key={rangeElem}><Icon icon="ic:round-star" color="#ff6060" width="30" height="30" /></span> :
                  <span className="etoile" key={rangeElem}><Icon icon="ic:round-star" color="#e3e3e3" width="30" height="30" /></span>
                  )}
              </div>
           </div>
      </div>
      <div className='logeDetail'>
           <div className="logeButton">{ Collapse('Description',description,'logementColl')}</div>
           <div className="logeButton">{ Collapse('Equipments',equipments,'logementColl')}</div> 
      </div> 
        </>
    )}
}
export default SingleLogement