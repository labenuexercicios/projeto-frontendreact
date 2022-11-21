import { useState } from "react"
import Cadastro from "../../components/Cadastro/Cadastro"
import CreditCards from "../../components/CreditCards/CreditCards"
import CardPurchase from "../../components/PurchaseSection/PurchaseSection"
import { ContainerAcount } from "./Account.styled"
import FavCard from "../../components/FavCard/FavCard"
import users from "../../JSON-Data/users.json"
import creditCard from "../../assets/creditCard.svg"
import heart from "../../assets/heart.svg"
import rightArrow from "../../assets/right-arrow.svg"
import shoppingBag from "../../assets/shopping_bag.svg"
import account from "../../assets/account.svg"


function Account(props) {
    const {setScreen, handleExit}=props
    const [flowPgae, setFlowPage] = useState(1)
    const handleRender = (page) => {

        switch (flowPgae) {
            case "Pedidos":
                return <CardPurchase />
            case "Cadastro":
                return <Cadastro />
            case "Metodos de Pagamento":
                return <CreditCards />
            case "Favoritos":
                return <FavCard />

            default:
                return <CardPurchase />
        }
    }



    const miniCards = [
        {
            name: "Pedidos",
            description: "Ver ultimos pedidos",
            image: `${shoppingBag}`
        },
        {
            name: "Cadastro",
            description: "Ver e editar dados cadastrais",
            image: `${account}`
        },
        {
            name: "Metodos de Pagamento",
            description: "Ver e adicionar metodos de pagamento",
            image: `${creditCard}`
        },
        {
            name: "Favoritos",
            description: "Ver produtos favoritos",
            image: `${heart}`
        }
    ]





    return (
        <ContainerAcount>
            <div>

                <section className="side-nav">

                    {miniCards.map((card) => {
                        return (

                            <div key={card.name} onClick={() => setFlowPage(card.name)} className="mini-card">
                                <img className="icon-image" src={card.image} alt="icon" />
                                <div className="body-card">
                                    <h2 className="name">{card.name}</h2>
                                    <p className="description">{card.description}</p>
                                </div>
                                <img className="icon-image" src={rightArrow} alt="seta" />

                            </div>
                        )

                    })
                    }
                    <div onClick={handleExit} className="mini-card">
                    <img className="icon-image" src={account} alt="icon" />
                                <div className="body-card">
                                    <h2 className="name">Sair</h2>
                                    <p className="description">sair da conta</p>
                                </div>
                                <img className="icon-image" src={rightArrow} alt="seta" />
                         </div>
                </section>
                <section className="main-view">
                    {handleRender()}

                </section>

            </div>


        </ContainerAcount>
    )

}
export default Account
