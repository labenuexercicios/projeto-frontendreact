import {Form, InputMaxMin, BotaoPesquisa, SectionBusca, FixaEsquerda, PStyle, Select, Input} from './styles'

import lupa from './midia-Filtros/lupa.jpg'

export const Filtros = (props) => {

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
                        <img src={lupa} alt="Buscar..." />
                        <Input type="text" placeholder="Pesquisar..." value = {props.string}  onChange={handleSearch}/> {/*onClick={props.pesquisar(props.string)}/> */}
                        <BotaoPesquisa onClick={() => props.pesquisarBotao(props.string)}>Buscar</BotaoPesquisa> 
                    </SectionBusca>
                </label>
                <label>
                    <PStyle>
                        <strong>Ordenar por nome</strong>
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

