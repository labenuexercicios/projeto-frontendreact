import React from "react";
import { useNavigate } from "react-router-dom"

import { handleHome } from "../Router/cordinator";
import styled from "styled-components";
import { StyledCarrinho } from "../Styleds/StyledCarrinho";
import { FooterStyled } from "../Styleds/FooterStyled";
import astrodev from "../Styleds/fotos/afrogirl.png";
import linkedin from "../Styleds/fotos/linkedin.png";
import git from "../Styleds/fotos/github.png";



export function Carrinho(props) {
  const carrinho = props.carrinho
  const setCarrinho = props.setCarrinho




  const navigate = useNavigate()

  let totalPreco = 0.
  
  

  return (
    <div>
    <CarrinhoContainer>

      <button className="campoParaVoltar" onClick={() => handleHome(navigate)}> Voltar a Loja</button>



      {carrinho.map((prod) => {
        totalPreco += prod.preco

        return (
          <StyledCarrinho >

            <section>
              <div className="blocos">
                <img className="imagem" src={prod.img} width="320" height="205" />
                <p>{prod.nome}</p>
                <p>{ `R$${prod.preco}`}</p>
                <p>{prod.descricao}</p>


                <button onClick={() => props.removeCart(prod)} >Remover do SpaceCart</button>



              </div>


            </section>

            <div></div>


          </StyledCarrinho>





        )



      })}

      <div
        className="total-preco"
      >
        PREÇO TOTAL: R${totalPreco}

      </div>

      

    </CarrinhoContainer>

<FooterStyled>
<div className="footer">
    <img className="astro" src={astrodev}></img>
    <p className="titulo-gab"> Desenvolvido com 💜 por Gabriella Silverio

    
    <a href="https://www.linkedin.com/in/gabriella-santanati/"> 
        <img className="linkedin" src={linkedin} alt="linkedin"></img>
     
     </a>

     <a href="https://github.com/slvgs"> 
        <img className="github" src={git} alt="gihub"></img>
     
     </a>

    </p>
     {/* <a href="https://www.linkedin.com/in/gabriella-santanati/"> 
        <img className="linkedin" src={linkedin} alt="linkedin"></img>
     
     </a> */}
     {/* <a href="https://github.com/slvgs"> 
        <img className="github" src={git} alt="gihub"></img>
     
     </a> */}
    
     


</div>

</FooterStyled>

</div>


  )


}


const CarrinhoContainer = styled.main`


 display: flex;

flex-direction: column;
padding: 90px;
justify-content: center;
align-items: center;
margin: 0;




min-height: 100vh;
min-width:100vh;

.campoParaVoltar{
  display: flex;
  border-radius: 20px;
  padding: px;
  flex-direction: row;
  justify-content: center;
  background-color: #01084e;
  background-image: radial-gradient(circle at 0% 0%, #c193fd 0, #9b77e9 50%, #725dd5 100%);

  border-color: #2980b9, #6dd5fa, #ffffff ;
  width:30vh;
  height: 5vh;
  align-items: center;
  color: black;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
 
  margin: 30px;
  box-shadow: 5px 5px 20px 1px ;
}

.campoParaVoltar:hover{

    padding: 20px;
    cursor: pointer;

}

.total-preco{
  color:white;
  display: flex;
  border-radius: 20px;
  padding: px;
  flex-direction: row;
  justify-content: center;
  background-color: #01084e;
background-image: linear-gradient(43deg, #01084e 0%, #0a020a 46%, #0a0adc 100%);

  border-color: #2980b9, #6dd5fa, #ffffff ;
  width:30vh;
  height: 5vh;
  align-items: center;
  color: white;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  
 
  margin-bottom: 0px;
  box-shadow: 5px 5px 20px 1px ;
  
}


@keyframes fundoAnimado {

0%{
  background-position: 0 0, 0 0;
}

50%{
  background-position: 50% 0, 50% 0;
}

100%{
  background-position: 100% 0, 100% 0;
}



};

background-image: url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg"),  url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg");
animation: fundoAnimado 200s linear infinite;
background-repeat: repeat-x, repeat-x repeat;







`;