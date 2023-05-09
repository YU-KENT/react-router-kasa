import { logementList } from '../../datas/logementList'
import Card from '../Card/Card'

function CardList(){
    return (

        <section className='sectionLoge'>
           <div className='logements'>
           {logementList.map((logement)=>(
           <div className='cards' key={logement.id}>
                <Card 
                cover={logement.cover}
                id={logement.id}
                title={logement.title}
                location={logement.location}
                />
           </div>
           ))}
           </div>
        </section>

    )
}


export default CardList