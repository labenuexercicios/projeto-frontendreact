import {CartStyled, PinRight, ContainerList, Item, ItemTotal, 
       RemoveButton, DivCart} from './styles'

import bin from "./Cart-assets/bin.png";
import cartImg from "./Cart-assets/istockphoto-1079804618-1024x1024.jpg"

import { useEffect } from 'react';

export const Cart = (props) => {
        
    let total = 0
    for(let i=0; i<props.cartList.length; i++)
    {
        total += +(props.cartList[i].price)
    }
    
    //hook para armazenar o carrinho no local storage
    useEffect(() => {
        if(props.cartList.length>0){
        const listStorageCart = JSON.stringify(props.cartList)
        localStorage.setItem("cartList", listStorageCart)
        }
        },[props.cartList])
  
    //HOOK UTILIZADO PARA CARREGAR OS DADOS DO CARRINHO DO LOCALSTORAGE PARA A TELA
    useEffect(() => {
        const newCart = JSON.parse(localStorage.getItem("cartList"))
        if(newCart !== null){
            props.setCartList(newCart)
        }   
    },[])

    return(
        <CartStyled display={props.displayCart}>  
            <PinRight>
                <DivCart>
                    <img alt="" src={cartImg}/>
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