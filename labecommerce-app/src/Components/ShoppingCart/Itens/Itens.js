import { ItemStyle } from './ItensStyle'

function Itens(props) {

  
    
  
    return (
        <ItemStyle>
            <p>{props.name}</p>
            <button>Remover</button>
        </ItemStyle>
        
    )
}

export default Itens;