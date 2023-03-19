import { ProductCard, ButtonProducts, ImageProducts, ImageP } from "./styled"


export function Produtos({setCart, cart, Products}) {

    
    const addItem = () => {
        const copyCart  = [...cart]

        const item = copyCart.find((product)=>product.id === Products.id)
        
        if(!item){
            copyCart.push(Products)
            
            setCart(copyCart)

            
        }

        
        else{
          
          item.quantity = item.quantity + 1;

          setCart(copyCart)
        
        }
         
        

        const teste = JSON.stringify(cart)
        localStorage.setItem("cart item", teste)

     };


     
    


         
    return (
        <div>
            
            <ProductCard name="item" id="item" htmlFor="item">
            <ImageProducts>{Products.imageUrl}</ImageProducts>
            <ImageP> {Products.name}</ImageP>
                <ImageP><b>Valor:</b> R$ {Products.value},00</ImageP>
                <ButtonProducts onClick={addItem}     >Adicionar</ButtonProducts>
            </ProductCard>
            
            
        </div>
    )
}