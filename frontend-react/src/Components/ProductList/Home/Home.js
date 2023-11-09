import {
    StyledMain,
    StyledSection,
    SectionMain,
    StyledSelect,
    StyledProductCard,
    StyledHomeParag,
    SessaoParagrafo,
    QuantidadeProduto,
    Ordenacao
} from "./HomeStyle";
import listOfProducts from "../../assents/productsList";


export default function Home() {
    return (
        <StyledMain>
            <SessaoParagrafo>
            <QuantidadeProduto>Quantidade de produtos:</QuantidadeProduto>
            <Ordenacao> Ordenação:</Ordenacao>
            <StyledSelect>
                <option value="crescente">Crescente</option>
                <option value="decrecente">Decrecente</option>
            </StyledSelect>
            </SessaoParagrafo>
            <SectionMain>
                {listOfProducts.map((product) => (
                    <div key={product.id}>
                    <StyledSection>
                    <StyledProductCard>   <img className="product-image" src={product.imageUrl} alt={product.name} /></StyledProductCard>
                    <StyledHomeParag>{product.name}</StyledHomeParag>
                    <StyledHomeParag>{product.value}</StyledHomeParag>
                    <button>Adicionar ao Carrinho</button>
                </StyledSection>
                </div>
            ))}    
            </SectionMain>
        </StyledMain>

    );
}