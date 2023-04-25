import foret from '../../assets/foret.png'
import AproposDetail from '../../components/AproposDetail/AproposDetail'
import '../../styles/Apropos.css'
function Apropos(){
 return(
    <><div className='container text-center'>
         <img className='titleImg' src={foret} alt="photoForet"></img>
     </div>
     <div className='row justify-content-center'>
      <AproposDetail />
    </div>
    </>
 )

}

export default Apropos