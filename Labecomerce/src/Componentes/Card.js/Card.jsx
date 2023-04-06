import { StyledCard, StyledH1 } from "./styleCard"

export const Card = ({produto, nome, popUpHandler, satelite}) => {
    return(
        <StyledCard onClick={() => popUpHandler(satelite.id)} produto ={produto} >
            <StyledH1>{nome}</StyledH1>
        </StyledCard>
    )
}