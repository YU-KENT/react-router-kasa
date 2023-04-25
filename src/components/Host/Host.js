function Host(host){
const {picture, name} = host.host

return(
    <>
    <img src={picture} alt="profile"></img>
    <span>{name}</span>
    </>
)
}

export default Host