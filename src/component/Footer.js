import React from "react";
import styled from "styled-components";

import facebook from "../img/facebook.svg";
import InstaLogo from "../img/insta.svg"

const FooterContainer = styled.div`
grid-row-start: 3;
display:flex;
flex-direction: row;
justify-content: space-evenly;
grid-row-gap: 10px;
/* grid-column-gap: 2em; */
padding: 16px;
background-color: #1E1E1E;
a{
    text-decoration: none;
    color: white;
}

img{
    width: 40px;
}

h4{
    color: #70DFEF;
}

.contato{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
}

.redes-sociais{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
}

.institucional{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    gap: 10px;
}
p{
    color: rgb(255, 0, 208);
}
`


export function Footer(){
    return (
<FooterContainer>
          <div className="institucional">
            <h4>Institucional</h4>
            <a href="#">Sobre nós</a>
          </div>
          <div className="contato">
            <h4>Contato</h4>
            <a href="#">Fale conosco</a>
            <a href="#">Dúvidas</a>
          </div>

          <div className="redes-sociais">
            <h4>Redes Sociais</h4>
            <a href="https://facebook.com">
              <img src={facebook} alt="facebook" />
            </a>

            <a href="https://instagram.com">
            <img src={InstaLogo} alt="instagram" />
            </a>
          </div>
        </FooterContainer>

    )

}