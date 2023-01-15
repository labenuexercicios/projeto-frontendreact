import { CardContainer } from "./style";
import Aerolito from "../../img/aerolito.jpg"

export function Card(){
    return (
        <CardContainer>
            <div>
                <img src={Aerolito} alt="" />
                <h2>
                    Aerolito
                </h2>
            </div>
        </CardContainer>
    )
}