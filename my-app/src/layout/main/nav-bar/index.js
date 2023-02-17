import { Input, Label, Section, Title } from "./styled";

function NavBar() {
  return (
    <Section>
      <Title>Filtrar</Title>
      <Label>Valor mínimo:</Label>
      <Input type="text" />
      <Label>Valor máximo:</Label>
      <Input type="text" />
    </Section>
  );
}

export default NavBar;
