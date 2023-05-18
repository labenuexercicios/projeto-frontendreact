/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import { MdOutlineSearch, MdPriceCheck } from "react-icons/md";
import Input from "../Input";
import { Container, InputsContainer } from "./styles";
import astroBot from "../../assets/img/astroBot.png";

const Filters = ({ minFilter, maxFilter, onChange, searchFilter }) => {
  
  const onHandleMinFilter = (event) => {
    onChange('minFilter', event.target.value);
    
  };

  const onHandleMaxFilter = (event) => {
    onChange('maxFilter', event.target.value);
  };

  const onHandleSearchFilter = (event) => {
    onChange('searchFilter', event.target.value);
  }

  return (
    <>
      <Container>
        <h1>Filtrar</h1>
        <InputsContainer>
          <Input
            name="valor mínimo:"
            label="valor mínimo:"
            value={minFilter}
            onChange={onHandleMinFilter}
            onlyNumbers
          >
            <MdPriceCheck />
          </Input>
          <Input 
          name="valor maximo:"
          label="valor maximo:"
          value={maxFilter}
          onChange={onHandleMaxFilter}
          onlyNumbers
          >
            <MdPriceCheck />
          </Input>
          <Input 
          name="search" 
          label="Procurar por nome:"
          value={searchFilter}
          onChange={onHandleSearchFilter}
          >
            <MdOutlineSearch />
          </Input>
        </InputsContainer>
        <img src={astroBot} alt="Astro bot" />
      </Container>
    </>
  );
};

export default Filters;
