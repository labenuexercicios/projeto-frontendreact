import { StyledCart, StyledH2Cart, StyledPCart, SessaoDoCart } from "./CartStyle";
import Items from '../Items/Items';
import { useEffect } from 'react';

export default function Cart({ cart, setCart, amount, setAmount }) {
    
    const removeFromCart = (product) => {
        setCart((currentCart) => {
            const updatedCart = currentCart.filter(item => item.id !== product.id);
            return updatedCart;
        });
    
        setAmount((currentAmount) => currentAmount - (product.value * product.quantity));
    };

    useEffect(() => {
        let total = 0;
        for (let item of cart) {
            const value = parseFloat(item.value.replace('R$ ', ''));
            total += value * item.quantity;
        }
        setAmount(total);
    }, [cart, setAmount]); 
    return (
        <StyledCart>
            <StyledH2Cart>Cart</StyledH2Cart>
            <SessaoDoCart>
                {cart.map((item, index) => (
                    <p key={index}>
                        {item.name}{item.quantity > 1 && ` x ${item.quantity}`}
                        <button onClick={() => removeFromCart(item)}>Remove</button>
                    </p>
                ))}
                <Items amount={amount} setAmount={setAmount} cart={cart} setCart={setCart} />
            </SessaoDoCart>
            <StyledPCart>Valor Total: R$ {amount.toFixed(2)}</StyledPCart>
        </StyledCart>

    );
}