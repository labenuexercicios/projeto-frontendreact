import { Image, List, ListItem, Section, Title } from "./styled";

function Payments() {
    return (
      <Section>
        <Title>Formas de pagamento</Title>
        <List>
          <ListItem>
            <Image
              src={process.env.PUBLIC_URL + "/img/mastercard.svg"}
              alt="cartão mastercard"
            />
          </ListItem>
  
          <ListItem>
            <Image
              src={process.env.PUBLIC_URL + "/img/visa.svg"}
              alt="cartão visa"
            />
          </ListItem>
  
          <ListItem>
            <Image
              src={process.env.PUBLIC_URL + "/img/amex.svg"}
              alt="cartão american express"
            />
          </ListItem>
  
          <ListItem>
            <Image
              src={process.env.PUBLIC_URL + "/img/elo.svg"}
              alt="cartão elo"
            />
          </ListItem>
  
          <ListItem>
            <Image
              src={process.env.PUBLIC_URL + "/img/hipercard.svg"}
              alt="cartão hipercard"
            />
          </ListItem>
  
          <ListItem>
            <Image
              src={process.env.PUBLIC_URL + "/img/discover.svg"}
              alt="cartão discover"
            />
          </ListItem>
  
          <ListItem>
            <Image
              src={process.env.PUBLIC_URL + "/img/boleto.svg"}
              alt="boleto"
            />
          </ListItem>
        </List>
      </Section>
    );
  }
  
  export default Payments;