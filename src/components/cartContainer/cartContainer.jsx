import { Cart } from "./cart/Cart"
import { CartContainerStyled, CartEnvelopedStyled, ButtonCartStyled } from "./cartContainerStyled"

export default function CartContainer({ cart, setCart, quantityById, setQuantityById, incrementQuantity, decrementQuantity, removeItem, change, totalPrice }) {
    return (
        <CartContainerStyled>
            <ButtonCartStyled onClick={() => change(1)}>Back to the Space</ButtonCartStyled>

            <CartEnvelopedStyled>
                <Cart 
                cart={cart} setCart={setCart} 
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeItem={removeItem}
                quantityById={quantityById} setQuantityById={setQuantityById}
                />
            </CartEnvelopedStyled>

        <h1>Total: U$ {totalPrice.toFixed(2).replace(".", ",")}</h1>
        </CartContainerStyled>
    )
} 