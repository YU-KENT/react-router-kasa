import foret from '../../assets/foret.png'
import Collapse from '../../components/Collapse/Collapse'
import '../../styles/Apropos.css'

function Apropos(){
 const Phrase1 = 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
 const Phrase2 = 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
 const Phrase3 = 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'
 const Phrase4 = 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'
 
 return(
    <><div className='container text-center'>
         <img className='titleImg' src={foret} alt="photoForet"></img>
     </div>
     <div className='row justify-content-center'>
       <div className="AproposButton">{Collapse('Fiabilité',Phrase1,'AproposColl')}</div>
       <div className="AproposButton">{Collapse('Respect',Phrase2,'AproposColl')}</div>
       <div className="AproposButton">{Collapse('Service',Phrase3,'AproposColl')}</div>
       <div className="AproposButton">{Collapse('Sécurité',Phrase4,'AproposColl')}</div>
    </div>
    </>
 )

}

export default Apropos


