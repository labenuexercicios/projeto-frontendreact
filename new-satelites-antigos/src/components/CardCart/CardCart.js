import {Container, Quantity, Info, Delete } from "./styled"
import {priceFormatter} from '../../utils/priceFormatter'

export const CardCart = (props) =>{
  return(
    <Container>
      <div className='image-card'>
        <img src={props.item.image}/>
      </div>
      <div className='info-card'>
        <Info>
          <h1>{props.item.name.toUpperCase()}</h1>
          <p>Subtotal: <span>{priceFormatter.format(props.item.price * props.item.quantity)}</span></p>
        </Info>
        <Quantity>
          <div> 
            <button disabled={props.item.quantity === 1 ? true : false} onClick={() => props.quantity(props.item, -1)}>&lang;</button>
            <h4>{props.item.quantity}</h4>
            <button onClick={() => props.quantity(props.item, 1)}>&rang;</button>
          </div>
          <div>
            <p>AVAILABLE</p>
          </div>
        </Quantity>
        <Delete onClick={() => props.deleteOfCart(props.item)}>
          <p>REMOVE</p>
        </Delete>
      </div>
    </Container>
  )
}