import React, { useContext } from "react";
import { BotaoCarrinho, Container, DivInput, Contador, DivImgContador, InputPesquisaNome, SelectOrdenar, NavStyled, InputFiltro } from "./filterStyled";
import carrinhoImg from "../../assets/carrinho.png";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Button } from "@chakra-ui/react";


export function Filter () {

    const context = useContext(GlobalContext);
    const { filtro, setFiltro, componentesCarrinho, setComponentesCarrinho, contador } = context;


    const onChangeFiltro = (event) => {
        setFiltro({...filtro, [event.target.name]: event.target.value})
    }

    const onClickIconeCarrinho = () => {
        setComponentesCarrinho({...componentesCarrinho, 
            divCarrinho: !componentesCarrinho.divCarrinho})
    }

    return (
        <div>
            <Container>
                <p>Faixa de preço</p>
                <DivInput>
                    <InputFiltro 
                            placeholder="Valor mínimo" 
                            type = "number" 
                            name= "filtraValorMinimo"
                            value={filtro.filtraValorMinimo} 
                            onChange={onChangeFiltro}>
                    </InputFiltro>
                    <InputFiltro 
                            placeholder="Valor máximo" 
                            type = "number" 
                            name = "filtraValorMaximo"
                            value={filtro.filtraValorMaximo} 
                            onChange={onChangeFiltro}>
                    </InputFiltro>

                </DivInput>
                
            </Container>

            <DivImgContador>
                <BotaoCarrinho onClick={onClickIconeCarrinho}><img src={carrinhoImg}/></BotaoCarrinho>
                {componentesCarrinho.badge && <Contador>{contador}</Contador>}
            </DivImgContador>
            
        </div>
    )
}


export function Nav () {
    const context = useContext(GlobalContext);
    const { filtro, setFiltro } = context;

    const onChangeFiltro = (event) => {
        setFiltro({...filtro, [event.target.name]: event.target.value})
    }

    return (
        <div>
                <NavStyled> 
                    <InputPesquisaNome
                    placeholder="Pesquisar pacote..." 
                    type = "text" 
                    name="filtraNome"
                    value={filtro.filtraNome} 
                    onChange={onChangeFiltro}>
                    </InputPesquisaNome>

                    <SelectOrdenar onChange={onChangeFiltro} name="ordenar">
                        <option value="">Ordenar</option>
                        <option value="crescente">Menor preço</option>
                        <option value="decrescente">Maior preço</option>
                    </SelectOrdenar>
                </NavStyled>

        </div>
    )
};
