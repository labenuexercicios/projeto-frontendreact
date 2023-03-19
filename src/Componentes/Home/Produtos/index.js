import { ProductCard, ButtonProducts, ImageProducts, ImageP } from "./styled"


export function Produtos({setCart, cart, Products}) {

    
    const addItem = () => {
        const copyCart  = [...cart]

        const item = copyCart.find((product)=>product.id === Products.id)
        
        if(!item){
            copyCart.push(Products)
            
        }
        else{
          
          item.quantity = item.quantity + 1;
        }
         
        setCart(copyCart)
        

     };

         
    return (
        <div>
            
            <ProductCard>
            <ImageProducts>{Products.imageUrl}</ImageProducts>
            <ImageP> {Products.name}</ImageP>
                <ImageP><b>Valor:</b> R$ {Products.value}</ImageP>
                <ButtonProducts onClick={addItem}    >Adicionar</ButtonProducts>
            </ProductCard>
            
            
        </div>
    )
}