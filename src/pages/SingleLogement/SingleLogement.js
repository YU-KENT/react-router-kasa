import { useParams } from "react-router-dom"
import { logementList } from "../../datas/logementList"
import Host from '../../components/Host/Host'
import { Icon } from '@iconify/react';
import Collapse from "../../components/Collapse/Collapse";
import '../../styles/SingleLogement.css'
import ImageSlider from'../../components/ImageSlider/ImageSlider'



function SingleLogement(){
    const {logementId} = useParams()
    const logementcurrent = logementList.find((logement)=> logement.id === logementId )
    const ranges = [1,2,3,4,5]
    const{title,location,tags,rating,host,description,equipments }= logementcurrent
    const slides = logementcurrent.pictures
  
    return(
        <><div className='container d-flex justify-content-center text-center'>
          <ImageSlider slides={slides}/>
            {/* <img className='logementImg' src={cover} alt="photoLogements"></img> */}
        </div>
        <div className='container d-flex px-5 py-4 justify-content-between'>
             <div>
                 <h1 className="logeTitle">{title}</h1>
                  <span className="logeLocation">{location}</span>
                  <div className="row mt-4">
                  {tags.map((tag)=>(
                  <span className="tag">{tag}</span>
                  ))}
                  </div>
             </div>
           <div>
              <div className="d-flex container text-center">
                <Host host ={host}  />
              </div>
              <div className="d-flex mt-4">
                  {ranges.map((rangeElem)=>
                  rating >= rangeElem ?
                  <span className="p-1"><Icon icon="ic:outline-star" color="#ff6060" width="27" height="27" /></span> :
                  <span className="p-1"><Icon icon="ic:outline-star" color="#e3e3e3" width="27" height="27" /></span>
                  )}
              </div>
           </div>
      </div>
      <div className="container px-5 mt-1">
        <div className="d-flex justify-content-between">
           <div className="logeButton">{ Collapse('Description',description,'logementColl')}</div>
           <div className="logeButton">{ Collapse('Equipments',equipments,'logementColl')}</div> 
        </div>
      </div> 
        
        </>
    )
}
export default SingleLogement