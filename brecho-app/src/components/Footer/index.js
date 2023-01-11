
import React from 'react'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import { Delivery, ContainerFooter, Graph, Information, List, List_link, List_li, List_link_button, List_li_button, Network, Network_link, Payment, Payment_img, Payment_desc, Payment_desc_p, Payment_card, Footer_desc } from './style'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';
import visa from '../../img/visa.svg';
import ncard from '../../img/ncard.svg';
import mastercard from '../../img/mastercard.svg';
import hipercard from '../../img/hipercard.svg';
import elo from '../../img/elo.svg';
import dinersclub from '../../img/dinersclub.svg';
import amex from '../../img/amex.svg';
import boleto from '../../img/boleto.svg';
import pix from '../../img/pix.svg';



const Footer = () => {
    return (
        <Delivery>
            <ContainerFooter>
                <AccessAlarmIcon style={{ fontSize: 35, color: "#666666" }} />
                <Graph><strong>Entrega expressa</strong><br />a partir de 1 dia útil</Graph>
                <AddCardOutlinedIcon style={{ fontSize: 35, color: "#666666" }} />
                <Graph><strong>Parcele em até 10x sem juros</strong><br />e divida em 2 cartões</Graph>
            </ContainerFooter>
            <hr />
            <Information>
                <List>
                    <List_li><strong>Institucional</strong></List_li>
                    <List_li><List_link>Sobre List_link Brecho.</List_link></List_li>
                    <List_li><List_link>Seja nosso Parceiro</List_link></List_li>
                    <List_li><List_link>Programa de Afiliados</List_link></List_li>
                    <List_li><List_link>Trabalhe Conosco</List_link></List_li>
                    <List_li><List_link>Marketplace Brecho.</List_link></List_li>
                    <List_li><List_link>Eventos</List_link></List_li>
                    <List_li><List_link>Dicas Brecho.</List_link></List_li>
                    <List_li><List_link>Blog</List_link></List_li>
                    <List_li><List_link>Black Friday Brecho.</List_link></List_li>
                </List>

                <List>
                    <List_li><strong>Ajuda</strong></List_li>
                    <List_li><List_link>Trocas e devoluções</List_link></List_li>
                    <List_li><List_link>Entregas</List_link></List_li>
                    <List_li><List_link>Minha Conta</List_link></List_li>
                    <List_li><List_link>Meus Pedidos</List_link></List_li>
                    <List_li><List_link>Pagamentos</List_link></List_li>
                    <List_li><List_link>Cancelamentos</List_link></List_li>
                    <List_li><List_link>Guia de Seguraça Digital</List_link></List_li>
                    <List_li><List_link>Como Comprar</List_link></List_li>
                    <List_li><List_link>Acessibilidade</List_link></List_li>
                </List>

                <List>
                    <List_li><strong>Políticas</strong></List_li>
                    <List_li><List_link>Regulamento</List_link></List_li>
                    <List_li><List_link>Politica de Privacidade</List_link></List_li>
                    <List_li><List_link>Programa de Integridade</List_link></List_li>
                </List>


                <List>
                    <List_li><strong>Central de Relacionamento</strong></List_li>
                    <List_li_button><List_link_button>TIRE SUAS DUVIDAS</List_link_button></List_li_button>
                </List>


                <Network>
                    <Network_link>
                        <FacebookOutlinedIcon style={{ fontSize: 40 }} />
                    </Network_link>
                    <Network_link>
                        <Instagram style={{ fontSize: 40 }} />
                    </Network_link>
                    <Network_link>
                        <Twitter style={{ fontSize: 40 }} />
                    </Network_link>
                    <Network_link>
                        <YouTube style={{ fontSize: 40 }} />
                    </Network_link>
                </Network>
            </Information>

            <Payment_card>
            <Payment>
                <Payment_img src={ncard} />
                <Payment_img src={mastercard} />
                <Payment_img src={hipercard} />
                <Payment_img src={elo} />
                <Payment_img src={dinersclub} />
                <Payment_img src={boleto} />
                <Payment_img src={pix} />
                <Payment_img src={visa} />
            </Payment>
            <Payment_desc>
                <Payment_desc_p>Divida suas compras em <br />2 cartões e pague em <br />até 10x sem juros</Payment_desc_p>
            </Payment_desc>
            </Payment_card>
            <Footer_desc></Footer_desc>
        </Delivery>
    )
}

export default Footer
