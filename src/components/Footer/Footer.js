import'../../styles/Footer.css'
import logofooter from'../../assets/LOGOFooter.png'
function Footer(){

    return(
        <footer className="footer mt-5">
            <img className='mt-5' src={logofooter} alt="logo"></img>
            <p className='mt-4'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer