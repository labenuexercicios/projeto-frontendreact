import React from "react";
import { FooterContainer, RocketContainer } from './FooterStyle';
import facebook from '../img/facebook.svg';
import instagram from '../img/instagram.svg';
import tiktok from '../img/tiktok.svg';
import rocket from '../img/rocket.svg';


export default function Footer(){
    return (
        <FooterContainer>
          <div className='historia'>
            <h3>Conheça Nossa História</h3>
          </div>
          <div className='contato'>
            <h3>Entre em Contato</h3>
          </div>

          <div className='redes-sociais'>
            <h3>Nossas Redes Sociais</h3>
            <a href='https://facebook.com'>
              <img src={facebook} alt='facebook' />
            </a>
            <a href="https://instagram.com">
            <img src={instagram} alt='instagram' />
            </a>
            <a href='https://www.tiktok.com/'>
            <img src={tiktok} alt='tiktok' />
            </a>
          </div>
          <RocketContainer>
          <img src={rocket} alt='rocket' />
          </RocketContainer>
        </FooterContainer>
    )
}