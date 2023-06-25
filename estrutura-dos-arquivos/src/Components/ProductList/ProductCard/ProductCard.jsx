import { ContainerCards } from "./ProductStyle"
import { Img, Button,SectionCard } from "./ProductStyle"


const ProductCard = (props) => {

    
    const addItem = (prod) => {
        const existeItem = props.cart.find((item) => {
            return item.id === prod.id
        })
        
        if (existeItem) {
            const newCart = props.cart.map((item) => {
                if (item.id === existeItem.id) {
                    return { ...item, amount: item.amount + 1 }
                }
                return item
            })
            props.setCart(newCart)
        } else {
            props.setCart([...props.cart, prod])
        }
    }
    
   
   
    return (
        <ContainerCards>

            <SectionCard>
                <Img src={props.image} />
                <p>{props.name}</p>
                <p>{props.currencyBrazil(props.value, true)}</p>
                <Button onClick={()=>addItem(props.prod)}>Adicionar ao carrinho</Button>
            </SectionCard>



        </ContainerCards>

    )
}
export default ProductCard