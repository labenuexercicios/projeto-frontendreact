import { HeaderContainer, InputHeader, P } from "./headerStyle"


export default function Header (){
    return(
        <HeaderContainer>
            <h1>LabeStore</h1>
            <InputHeader 
            placeholder="    O que você procura?"
            type="text"/>
        </HeaderContainer>
    )
}