import { StyledCart, StyledH2Cart, StyledPCart, SessaoDoCart } from "./CartStyle";


export default function Cart(){
    return (
        <StyledCart>
       <StyledH2Cart>Cart</StyledH2Cart>
       <SessaoDoCart>
       <p> <span>x0 Nome do Produto </span></p>
       <button>remover</button>
       </SessaoDoCart>
       <StyledPCart>Valor Total:0</StyledPCart>
       </StyledCart>
    );
}