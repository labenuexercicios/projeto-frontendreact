import { Navigation, ButtonNavigation } from "./styled";

export function Nav(props){


    const onChangeOrdem =(event)=>{
        props.setOrdem(event.target.value)
    }

    return(
        <Navigation>
            <ButtonNavigation value={"maior"} onClick={onChangeOrdem}>Ordenar por preço: descrescente</ButtonNavigation>
            <ButtonNavigation value={"menor"} onClick={onChangeOrdem}>Ordenar por preço: ascendente</ButtonNavigation>
        </Navigation>
    )
}