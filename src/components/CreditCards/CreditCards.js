import { ContainerCard } from "./CreditCard.styled"
import masterCard from "../../assets/masterCard.png"
import visa from "../../assets/visa.png"
import elo from "../../assets/elo.png"



function CreditCards(props) {
    const {creditCards} = props

    const handleSwitch = (brand) => {
        switch (brand) {
            case "Visa":
                return visa
            case "Master Card":
                return masterCard
            case "Elo":
                return elo
        }
    }




    return (
        <ContainerCard>
            <div className="header-cards">
                <h1>Cartões de crédito</h1>
                <p>adcionar novo cartão</p>
            </div>
            <div className="cards-body">

                {creditCards.map((creditCard) => {
                    const lastFourS = String(creditCard.number).slice(-4)
                    const lastFour = Number(lastFourS)
                    return (
                        <div key={creditCard.number} className="card-card">
                            <div className="card-full">
                                <img className="img" src={handleSwitch(creditCard.brand)} alt="" />
                                <div className="card-info">
                                    <p className="name-card">{creditCard.name}</p>
                                    <p className="number-card">****************{lastFour}</p>
                                    <p className="val-card"><span>val.: </span><span>{creditCard.validityMounth}/</span><span>{creditCard.validityYear}</span></p>
                                </div>
                            </div>
                            <p>excluir</p>
                           
                        </div>

                    )
                })

                }

            </div>



        </ContainerCard>
    )

}
export default CreditCards

/**
 *        "creditCards":[{
            "choice": true,
            "number":1234567890123456,
            "validity":"2022-12",
            "cvc":123,
            "name":"Alexandre Machado",
            "cpf": 12345678901
        }],
 * 
 */