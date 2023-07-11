import styled from 'styled-components';
import React from 'react';
import { CardContainer, Card, CardTexto, ImgCard, Filtros, TemplateMain, ContainerCarrinho, CarrinhoTexto, TotalItens, BtnAdicionar, BtnRemover, BodyContainer, LogoLab, IconeTexto, InputBusca, Footer } from './style';
import LogoAstro from './img/LabSpace.jpg';
import insta from './img/insta.svg';
import facebook from './img/facebook.svg';


export const HeaderLab = styled.div`
grid-column: 1/-1;
`

class PaginaAgradecimento extends React.Component {

    render() {
        return (
        <TemplateMain>
            <HeaderLab>
            <LogoLab src={LogoAstro} />
            </HeaderLab>
            <BodyContainer>
            <CardContainer>
                <Card>
                <ImgCard src={LogoAstro} />
                <CardTexto>
                    <h2>
                    Obrigado por comprar na LabSpace!
                    </h2>
                    <p>
                    Seu pedido foi recebido com sucesso e será entregue em até 2 dias úteis.
                    </p>
                </CardTexto>
                </Card>
            </CardContainer>
            </BodyContainer>
            <Footer>
            <Filtros>
                <IconeTexto src={insta} />
                <IconeTexto src={facebook} />
            </Filtros>
            <InputBusca placeholder="Buscar produtos" />
            </Footer>
        </TemplateMain>
        );
    }
    }

    export default PaginaAgradecimento;