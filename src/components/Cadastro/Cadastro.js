import AdressForm from "../AdressForm/adressForm"

function Cadastro(props) {
    const {user} =props

    
    return (
        <AdressForm user={user}/>
        
    )
}
export default Cadastro