import {CartStyled, PinRight, ContainerList, Item, ItemTotal, 
       RemoveButton, DivCart} from './styles'

import bin from "./Cart-assets/bin.png";
import cartImg from "./Cart-assets/istockphoto-1079804618-1024x1024.jpg"

export const Cart = (props) => {
        
    let total = 0
    for(let i=0; i<props.cartList.length; i++)
    {
        total += +(props.cartList[i].price)
    }
    
    return(
        <CartStyled display={props.displayCart}>  
            <PinRight>
                <DivCart>
                    <img src={cartImg}/>
                    <p>Carrinho:</p>
                </DivCart>

                <ContainerList>
                    <ul>
                    {props.cartList.map((item, index) => {
                        return (
                        <Item key={index}>    {/*key={Math.random()> */}
                            <p>{item.qtd}x {item.name} R${item.price.toFixed(2)}</p>
                            <RemoveButton onClick={() => props.removeCart(item)}> 
                            <img src={bin} alt="" width="16px" />
                            </RemoveButton>
                        </Item>
                        );
                    })}
                    </ul>
                </ContainerList>

                <ItemTotal> 
                    <strong>Total: R${total.toFixed(2)}</strong>
                </ItemTotal>
            </PinRight> 
        </CartStyled>
    )
}