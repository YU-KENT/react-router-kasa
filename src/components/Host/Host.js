
function Host(host){
const {picture, name} = host.host

return(
    <>
    <span className='nomHost'>{name}</span>
    <img className='profile' src={picture} alt={'profileof'+{name}}></img>
    </>
)
}

export default Host