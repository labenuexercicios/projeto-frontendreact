import { Container,ShoeImg,ShoeName,ShoeSize,ShoePrice } from "./styled";

const ShoeCard = (props) =>{

    const onChangeCarrinho = (event)=>{
        props.setCarrinho(event.target.value)
    }

    return(<Container onClick={()=>props.comprarTenis(props.shoe)} onChange={onChangeCarrinho}>
        <ShoeImg src={props.shoe.imagem}/>
        <ShoeName>{props.shoe.name}</ShoeName>
        <ShoeSize>Tamanhos: {props.shoe.tamanho}</ShoeSize>
        <h5>{props.shoe.cor}</h5>
        <ShoePrice>R${props.shoe.preco}</ShoePrice>
    </Container>
    )
}

export default ShoeCard;