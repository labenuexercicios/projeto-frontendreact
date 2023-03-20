
import productList from "../assents/productsList";
import { ContainerHeader } from "./HeaderStyled"

const Header = (props) => {

    return (
        <ContainerHeader>
            <p>Quantidade de produtos:{productList.length}</p>
            <p>Ordenação:
                <select value={props.ordination} onChange={(e) => props.setOrdination(e.target.value)}>
                    <option value="">Ordenar</option>
                    <option value="crescente">Crescente</option>
                    <option value="decrescente">Decrecente</option>
                </select></p>


        </ContainerHeader>
    )

}
export default Header
