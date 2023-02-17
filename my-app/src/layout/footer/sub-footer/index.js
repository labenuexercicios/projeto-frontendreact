import { Address, ItemList, Links, List, Section } from "./styled";

function SubFooter() {
    return (
      <Section>
        <List>
          <ItemList>
            <Links href="/">Brasil</Links>
          </ItemList>
          <ItemList>
            <Links href="/">Política de Privacidade</Links>
          </ItemList>
          <ItemList>
            <Links href="/">Termos de Uso</Links>
          </ItemList>
        </List>
  
        <Address>
          © Regiane Martins - 2023.
        </Address>
      </Section>
    );
  }
  
  export default SubFooter;