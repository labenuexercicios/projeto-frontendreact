import React from "react";
import { AddButton, RestButton} from "./styled";


export function CartButtons({product, setProduct, carrito, setCarrito}){
const addCart = (product) => {
    if (carrito.some((productCart) => productCart.id === product.id)) {
        setCarrito(
            [...carrito].map((productCart) => {
                if (productCart.id === product.id) {
                    productCart.quantity++;
                    return productCart;
                }
                return productCart;
            })
        );
    } else {
      
        setCarrito((currentState) => [
            ...currentState,
            {...product, quantity: 1 },
        ]);
    }
};

const lessProduct = (product) => {
    if (product.quantity <= 1) {
        setCarrito((currentState) => [...currentState].filter((cartProduct) => cartProduct.id != product.id));
    } else {
        setCarrito((currentState) => {
         
            return [...currentState].map((productCart) => {
                if (productCart.id === product.id) {
                
                    productCart.quantity -= 1;
                }
                return productCart;
            });
        });
    }
};
return(
    <div>
    <AddButton onClick={addCart}>Agregar</AddButton>
    <RestButton onClick={lessProduct}>Restar</RestButton>
    </div>
)
}
