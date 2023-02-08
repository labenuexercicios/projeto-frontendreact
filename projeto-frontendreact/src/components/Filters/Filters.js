import {Form, InputMaxMin, ButtonSearch, SectionSearch, PinLeft, PStyle, Select, Input} from './styles'

import lupaImg from './Filters-assets/lupa.jpg'

export const Filters = (props) => {

  const handleSearch = (e) => {
    props.setString(e.target.value);
  };
    
  const handleSearchMin = (e) => {
    props.setMinPrice(e.target.value);
  };

  const handleSearchMax = (e) => {
    props.setMaxPrice(e.target.value);
  };

  const handleABCSearch = (e) => {
    props.setSortABC(e.target.value);
  }

  const handleCategorySearch = (e) => {
    props.setCategoryFilter(e.target.value);
  }

    return(
        // style={{ backgroundImage: `url(${fundo})` }}>
        <Form>   
            <PinLeft>
                <label>
                    <PStyle>
                        <strong>Pesquisar por nome</strong>
                    </PStyle>
                    <SectionSearch>
                        <img src={lupaImg} alt="Buscar..." />
                        <Input type="text" placeholder="Pesquisar..." value = {props.string}  onChange={handleSearch}/> {/*onClick={props.pesquisar(props.string)}/> */}
                        <ButtonSearch onClick={() => props.searchButton(props.string)}>Buscar</ButtonSearch> 
                    </SectionSearch>
                </label>
                <label>
                    <PStyle>
                        <strong>Ordenar por nome</strong>
                    </PStyle>
                    <SectionSearch>
                        <Select onChange={handleABCSearch}>
                            <option value="">Selecionar</option>
                            <option value="Crescente">Crescente</option>
                        <option value="Decrescente">Decrescente</option>
                        </Select>
                    </SectionSearch>
                </label>
                <label>
                    <PStyle>
                        <strong>Pesquisar por preço</strong>
                    </PStyle>
                    <SectionSearch>
                        R$<InputMaxMin type="number" placeholder="Valor mínimo." value = {props.minPrice}  
                        onChange = {handleSearchMin}
                        /> 
                    </SectionSearch>
                    <SectionSearch>
                        R$<InputMaxMin type="number" placeholder="Valor máximo." value = {props.maxPrice} 
                        onChange = {handleSearchMax}
                        /> 
                    </SectionSearch>
                </label>
                <label>
                    <PStyle>
                        <strong>Pesquisar por categoria</strong>
                    </PStyle>
                    <SectionSearch>
                        <Select onChange={handleCategorySearch}>
                            <option value="">Selecionar</option>
                            <option value="Calor">Calor</option>
                            <option value="Frio">Frio</option>
                            <option value="Acessórios">Acessórios</option>
                        </Select>
                    </SectionSearch>
                </label>
            </PinLeft>
        </Form>
    )
}

