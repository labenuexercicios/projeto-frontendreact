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


export default function Home() {
    return (
        <StyledMain>
            <SessaoParagrafo>
            <QuantidadeProduto>Quantidade de produtos:</QuantidadeProduto>
            <Ordenacao> Ordenação:</Ordenacao>
            <StyledSelect>
                <option value="decrecente">Crescente</option>
                <option value="decrecente">Decrecente</option>
            </StyledSelect>
            </SessaoParagrafo>
            <SectionMain>
                <StyledSection >
                    <StyledProductCard>Product Card</StyledProductCard>
                    <StyledHomeParag>Nome do Produto</StyledHomeParag>
                    <StyledHomeParag>valor</StyledHomeParag>
                    <button>Adicionar ao Carrinho</button>
                </StyledSection>

                <StyledSection >
                    <StyledProductCard>Product Card</StyledProductCard>
                    <StyledHomeParag>Nome do Produto</StyledHomeParag>
                    <StyledHomeParag>valor</StyledHomeParag>
                    <button>Adicionar ao Carrinho</button>
                </StyledSection>

                <StyledSection >
                    <StyledProductCard>Product Card</StyledProductCard>
                    <StyledHomeParag>Nome do Produto</StyledHomeParag>
                    <StyledHomeParag>valor</StyledHomeParag>
                    <button>Adicionar ao Carrinho</button>
                </StyledSection>
            </SectionMain>
        </StyledMain>

    );
}