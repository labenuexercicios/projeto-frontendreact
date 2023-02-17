import { ItemLink, ItemList, List, Title } from "./styled";

function Assistant() {
    return (
      <div>
        <Title>Ajuda</Title>
        <List>
          <ItemList>
            <ItemLink href="/">Dúvidas Gerais</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Encontre seu Tamanho</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Entregas</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Pedidos</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Trocas e Devoluções</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Editar consentimento</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Preferências de Cookie</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Pagamentos</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Produtos</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Corporativo</ItemLink>
          </ItemList>
          <ItemList>
            <ItemLink href="/">Fale Conosco</ItemLink>
          </ItemList>
        </List>
      </div>
    );
  }
  
  export default Assistant;