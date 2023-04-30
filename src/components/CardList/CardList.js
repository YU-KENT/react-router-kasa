import { logementList } from '../../datas/logementList'
import Card from '../Card/Card'

function CardList(){
    return (

        <section className='container text-center sectionLoge p-5 my-5 '>
           <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 '>
           {logementList.map((logement)=>(
           <div className='col mb-5 position-relative' key={logement.id}>
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