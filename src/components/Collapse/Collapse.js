import { useState } from "react"

function Collapse (nom,data) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = ()=>{
    setIsOpen( isOpen ? false : true)
  }
  return isOpen ?(
  <><div className="button" type="button" onClick={() => toggleCollapse()}>{nom}
    </div>
  <span className="ArrowDown"></span>
  <div className="">
      <div>{ typeof data === "string" ? (data) : (
        data.map((ele)=>{
        return <span>{ele}</span>
      })
      )}
      </div>
  </div>
  </>
  
 ):(
  <><div className="button" type="button" onClick={() => toggleCollapse()}>{nom}
  </div>
  <span className="ArrowDown"></span></>
 )}



 
export default Collapse 