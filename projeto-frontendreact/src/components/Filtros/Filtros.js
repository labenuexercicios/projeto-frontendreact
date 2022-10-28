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


export const Filtros = (props) => {
  
    // function pegarTextoPesquisado(){
    //     const texto = props.string
    //     props.pesquisar(texto)
    //   }

    const onChangeString = (event) => {
        props.setString(event.target.value)
      }
    
    const onChangeMax = (event) => 
    {
        props.setValorMaximo(event.target.value)
    }

    const onChangeMin = (event) => 
    {
        props.setValorMinimo(event.target.value)
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
                <Input type="text" placeholder="Pesquise um item..." value = {props.string}  onChange={onChangeString} onClick={props.pesquisar(props.string)}/> 
                <BotaoPesquisa onClick={() => props.pesquisarBotao(props.string)}>Buscar</BotaoPesquisa> 
            </SectionBusca>
            </label>
            <label>
                <PStyle>
                    <strong>Pesquisar por preço</strong>
                </PStyle>
                <SectionBusca>
                    R$<InputMaxMin type="number" placeholder="Valor mínimo." value = {props.valorMinimo}  
                    onChange={onChangeMin}
                    onClick={props.filtraValor(props.valorMinimo, props.valorMaximo)}
                    /> 
                </SectionBusca>
                <SectionBusca>
                    R$<InputMaxMin type="number" placeholder="Valor máximo." value = {props.valorMaximo} 
                    onChange={onChangeMax} 
                    onClick={props.filtraValor(props.valorMinimo, props.valorMaximo)}
                    /> 
                </SectionBusca>
            </label>
            </FixaEsquerda>
        </Form>
    )
}

