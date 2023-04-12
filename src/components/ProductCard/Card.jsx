import { CardContainer } from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(props) {
  return (
    <CardContainer className={(props.name.toLowerCase()).includes(props.nameFilter.toLowerCase()) ? null : "inactive"}>
      <div className="tag">{props.year}</div>
      <div className="imageContainer">
      <img src={props.img} alt={props.name}></img>
      </div>
      <p>{props.name}</p>
      <hr/>
      <div className="buy-bar">
      <p className="pricing">{props.price}</p>
      <button onClick={() => props.handleCart(props.id)}><FontAwesomeIcon icon="fa-solid fa-cart-plus" /></button>
      </div>
    </CardContainer>
  )
}
