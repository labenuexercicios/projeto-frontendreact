import { MainStyled } from "./Style" 
import Promotions from "./promotions/Promotions"

export default function Main(props) {
    return (
        <MainStyled>
            <Promotions products={ props.products.filter(function(item) {return item.discount > 0} ) }/>
        </MainStyled>
    )
}