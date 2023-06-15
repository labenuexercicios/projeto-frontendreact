import { ItemStyle } from './ItensStyle'

function Itens(props) {

    const { produto } = props
    const { removeCart } = props

  
    return (
        <ul>
            <ItemStyle >
        
                <p>{props.name}: {props.qtd}</p>
                        
                <button
                    onClick={() => removeCart({produto})}
                >Remover</button>

                </ItemStyle>
    

        </ul>
        
        
        
    )
}

export default Itens;