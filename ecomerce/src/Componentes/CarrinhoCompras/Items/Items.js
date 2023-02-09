export function Itens(props) {

    return (
        props.carrinho.map((item, index) => {
            return (
                <div key={index}>
                    <span>x {item.quantidade}</span>
                    <span>{item.nome}</span>
                    <button onClick={() => props.subCarrinho(item)}>Remover</button>
                </div>
            )
        })
    )
}