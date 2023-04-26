import{NavLink} from 'react-router-dom'
import logo from'../../assets/LOGO.png'
import '../../styles/Header.css'
function Header(){
    return(
        <header className='container px-5 py-2  my-3 d-flex justify-content-between align-items-center'>
            <img className='logo' src ={logo} alt="logo" />
            <nav className='navbar'>
                <NavLink to ='/'>Accueil</NavLink>
                <NavLink to ='/Apropos'>A Propos</NavLink>
            </nav>
        </header>

)
}

export default Header