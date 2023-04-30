
import CardList from '../../components/CardList/CardList'
import montagne from'../../assets/montagne.png'
import '../../styles/Home.css'

function Home(){
 return(
    <><div className='container position-relative text-center mt-5 '>
         <img className='homeImg' src={montagne} alt="photoMontagne"></img>
         <h1 className='position-absolute top-50 start-50 translate-middle homeTitle'>
            Chez vous, partout et ailleurs
         </h1>
     </div>
     <CardList /></>
 )

}

export default Home