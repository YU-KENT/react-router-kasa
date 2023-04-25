import { logementList } from '../../datas/logementList'
import Card from '../Card/Card'

function CardList(){
    return (

        <section className='container row row-cols-1 row-cols-sm-2 row-cols-md-3'>
           
           {logementList.map((logement)=>(
           <Card 
           id={logement.id}
           title={logement.title}
           location={logement.location}
           />
        ))}
           

        </section>

    )
}


export default CardList