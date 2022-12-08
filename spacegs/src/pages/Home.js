import React from "react";
import { useNavigate } from "react-router-dom"
import { handleCart } from "../Router/cordinator";
import { Cards } from "../Card/Cards";
import { FooterStyled } from "../Styleds/FooterStyled";
import { GlobalSyled } from "../Styleds/GlobalSyled";
import astrodev from "../Styleds/fotos/afrogirl.png";
import linkedin from "../Styleds/fotos/linkedin.png";
import git from "../Styleds/fotos/github.png";




export function Home(props) {

    const navigate = useNavigate("/seucarrinho")
  


    return (

        <div>

            
            <Cards
                setValorDoFiltro={props.setValorDoFiltro}
                valorDoFiltro={props.valorDoFiltro}
                valorMin={props.valorMin}
                setValorMin={props.setValorMin}
                valorMax={props.valorMax}
                setValorMax={props.setValorMax}
                sortProdutos={props.sortProdutos}
                setSortProdutos={props.setSortProdutos}
                ordem={props.ordem}
                setOrdem={props.setOrdem}
                addCart = {props.addCart}
                produtos = {props.produtos}



            />

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
