import { ContaninerCardPurchase, ContainerCard } from "./PurchaseSection.styled"

const produtos = [{
    id:1,
    status: 1,
    name:"Produto!!!!",
    image: "https://picsum.photos/200/300",
    titulo: "titulo do produto",
    quantity: 1,
    date: "12/12/2022"
}]
const handleStaus = (status) => {
    switch (status) {
        case 1:
            return "foi entregue"
        case 2:
            return "esta a caminho"
        case 3:
            return " foi cancelado"
    }

}


function CardPurchase() {

    return (
        <ContaninerCardPurchase  >
            <h1>Ultimos Pedidos</h1>
            <p>aqui esta seus ultimos pedidos</p>

            {produtos.map((prod) => {
                return (
                    <ContainerCard status={prod.status} key={prod.id}>
                        <div className="header-card">
                            <p className="color">O pedido {handleStaus(prod.status)}</p>
                            {prod.status===1 && <p className="date">entregue em:<span className="color">{prod.date}</span> </p> }

                        </div>
                        <hr/>
                        <div className="info-card">
                            <img src={prod.image} alt="" />
                            <div>
                                <h4>{prod.name}</h4>
                                <p>{prod.quantity} unidades</p>
                            </div>

                        </div>
                    </ContainerCard>
                )
            })

            }



        </ContaninerCardPurchase>
    )
}

export default CardPurchase