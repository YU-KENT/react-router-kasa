
function Host(host){
    
const {picture, name} = host.host
const alt ='profileOf'+ host.host.name
return(
    <>
    <span className='nomHost'>{name}</span>
    <img className='profiles_img' src={picture} alt={alt}></img>
    </>
)
}

export default Host