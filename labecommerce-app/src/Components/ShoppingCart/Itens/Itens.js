import { ItemStyle } from './ItensStyle'

function Itens(props) {

    const { meusProdutos } = props
    // const { cart } = props
    // const { amount } = props
    
  
    return (
        <ItemStyle>
            <p>Item</p>
            <button>Remover</button>
        </ItemStyle>
        
    )
}

export default Itens;