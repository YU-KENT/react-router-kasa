
const Description = (description) => {return(
  <><div className="button" type="button" >Description</div>
  <span className="ArrowDown"></span>
  <span className="ArrowUp"></span>
  <div className="collapse"><p>{description}</p></div>
  </>
 )}
const Equipements = (logement) => {
   
  return(
  <><div className="button" type="button"  >Equipements</div>
  <span className="ArrowDown"></span>
  <span className="ArrowUp"></span>
  <div className="collapse">
  {(logement.equipments).map((equi)=>{
    return(
      <span>{equi}</span>
    )
  })}
  </div>
  </>

)}


function LogementDetail({description,logement}){
 console.log(logement)
  return(
    <><div className="col-5">{Description(description)}</div>
    <div className="col-5">{Equipements(logement)}</div> 
    </>
  )
}
 
export default LogementDetail