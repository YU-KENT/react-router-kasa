import { useState } from "react"
import { Icon } from '@iconify/react';

function Collapse (nom,data,classname) {
    const [isOpen, setIsOpen] = useState(true)
    const toggleCollapse = ()=>{
      setIsOpen( isOpen ? false : true)
    }
    return isOpen ? (
    <><div className="button" type="button" onClick={() => toggleCollapse()}>{nom}
        <span className="ArrowUp"><Icon icon="material-symbols:arrow-back-ios" color="white" width="30" height="30" rotate={1} /></span>
      </div>
    
    <div className={classname}>
        { typeof data === "string" ?<div>{data}</div> 
        : <div className="d-flex flex-column">
          {data.map((ele)=>{
          return <span>{ele}</span>
        })}</div>
        }  
    </div>
    </>
    
    ) : (
    <><div className="button" type="button" onClick={() => toggleCollapse()}>{nom}
      <span className="ArrowDown"><Icon icon="material-symbols:arrow-back-ios" color="white" width="30" height="30" rotate={3} /></span>
    </div>
    </>
  )}



 
export default Collapse 