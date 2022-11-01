import {FiltrosStyled, 
        Form, 
        Input, 
        InputMaxMin, 
        BotaoPesquisa, 
        SectionBusca, 
        ImgLupa, 
        FixaEsquerda,
        PStyle} from './styles'

import styled from "styled-components";
import lupa from './midia-Filtros/lupa.jpg'

const Select = styled.select`
font-size: 18px;
border-radius: 10px;
height: 40px;
width: 18vw;
background-color: #E0EEEE;
@media screen and (max-device-width: 1000px) {
    width: 30vw;
}
`

export const Filtros = (props) => {

    ////////////////////////////////////////////////
    // const onChangeString = (event) => {
    //     props.setString(event.target.value)
    //   }
    
    // const onChangeMax = (event) => 
    // {
    //     props.setValorMaximo(event.target.value)
    // }

    // const onChangeMin = (event) => 
    // {
    //     props.setValorMinimo(event.target.value)
    // }
  ////////////////////////////////////////////////////

  const handleSearch = (e) => {
    props.setString(e.target.value);
  };
    
  const handleSearchMin = (e) => {
    props.setValorMinimo(e.target.value);
  };

  const handleSearchMax = (e) => {
    props.setValorMaximo(e.target.value);
  };

  const handleABCSearch = (e) => {
    props.setSortABC(e.target.value);
  }

  const handleCategoriaSearch = (e) => {
    props.setCategoriaFilter(e.target.value);
  }

    return(
        // style={{ backgroundImage: `url(${fundo})` }}>
        <Form>   
            <FixaEsquerda>
            <label>
            <PStyle>
                <strong>Pesquisar por nome</strong>
            </PStyle>
            <SectionBusca>
                <ImgLupa src={lupa} alt="Buscar..." />
                <Input type="text" placeholder="Pesquisar..." value = {props.string}  onChange={handleSearch}/> {/*onClick={props.pesquisar(props.string)}/> */}
                <BotaoPesquisa onClick={() => props.pesquisarBotao(props.string)}>Buscar</BotaoPesquisa> 
            </SectionBusca>
            </label>
            <label>
                <PStyle>
                    <strong>Pesquisar por nome</strong>
                </PStyle>
                <SectionBusca>
                <Select onChange={handleABCSearch}>
                    <option value="">Selecionar</option>
                    <option value="Crescente">Crescente</option>
                    <option value="Decrescente">Decrescente</option>
                </Select>
                </SectionBusca>
            </label>
            <label>
                <PStyle>
                    <strong>Pesquisar por preço</strong>
                </PStyle>
                <SectionBusca>
                    R$<InputMaxMin type="number" placeholder="Valor mínimo." value = {props.valorMinimo}  
                    onChange = {handleSearchMin}
                    /> 
                </SectionBusca>
                <SectionBusca>
                    R$<InputMaxMin type="number" placeholder="Valor máximo." value = {props.valorMaximo} 
                    onChange = {handleSearchMax}
                    /> 
                </SectionBusca>
            </label>
            <label>
                <PStyle>
                    <strong>Pesquisar por categoria</strong>
                </PStyle>
                <SectionBusca>
                <Select onChange={handleCategoriaSearch}>
                    <option value="">Selecionar</option>
                    <option value="Calor">Calor</option>
                    <option value="Frio">Frio</option>
                    <option value="Acessórios">Acessórios</option>
                </Select>
                </SectionBusca>
            </label>
            </FixaEsquerda>
        </Form>
    )
}

