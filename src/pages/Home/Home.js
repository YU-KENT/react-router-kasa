
import CardList from '../../components/CardList/CardList'
import montagne from'../../assets/montagne.png'
import '../../styles/Home.css'

function Home(){
 return(
    <><div className='homeImg '>
         <img className='' src={montagne} alt="photoMontagne"></img>
         <h1 className='homeTitle'>
            Chez vous, partout et ailleurs
         </h1>
     </div>
     <CardList /></>
 )

}

export default Home