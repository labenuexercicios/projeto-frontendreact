import { MdOutlineSearch, MdPriceCheck } from 'react-icons/md'
import Input from "../Input";
import { Container } from "./styles";
import  astroBot  from '../../assets/img/astroBot.png'

const Filters = () => {
  return (
    <>
    <Container>
      <h1>Filtrar</h1>
      <Input name="valor mínimo:" label="valor mínimo:">
      <MdPriceCheck />
      </Input>
      <Input name="valor maximo:" label="valor maximo:">
      <MdPriceCheck />
      </Input>
      <Input name="search" label="Procurar por nome:">
      <MdOutlineSearch />
      </Input>
      <img src={astroBot} alt="Astro bot" />
    </Container>
    </>
  )
}

export default Filters;