 //Temporario

export function ProductCard({card, adi}){
    return(
        <article className="productCard">
            <img src={card.imageUrl} alt={card.name} />
            <h2>{card.name}</h2>
            <p>R${card.value},00</p>
            <button>Adicionar no carrinho</button>
        </article>
    )
}