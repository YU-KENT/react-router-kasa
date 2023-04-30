import '../../styles/Host.css'
function Host(host){
const {picture, name} = host.host

return(
    <>
    <span className='nomHost'>{name}</span>
    <img className='profile' src={picture} alt="profile"></img>
    
    </>
)
}

export default Host