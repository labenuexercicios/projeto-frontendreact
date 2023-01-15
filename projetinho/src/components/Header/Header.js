import React from "react";
import { HeaderContainer } from "./style";
import star from "../../imagem/logotipo.png"
import carrinho from "../../imagem/carrinhodegrade.png"

export default function Header({filtroNome,setFiltroNome,trocarTela}) {
  const onChangeFiltroNome  = (e)=>{
    setFiltroNome(e.target.value)
    console.log(filtroNome)


  }
  
 


  return (
   
      <HeaderContainer>
        
        <div className="logotipo">
          <img src={star}/>
        
          <h1>SpaceKids</h1>
        </div>

        {/* <div>
          
          </div> */}

          <div>
         
             
          <input className="InputContainer" type="text" placeholder="Buscar" onChange={ (e) => {onChangeFiltroNome (e) } } />
          <button  className="BotaoStilo">Buscar</button> 
                                
       
        </div>
        
        <div className="botaoHome">
          
          <button  className="BotaoStilo" onClick={(tela)=>trocarTela(1)} >Home </button> 

          </div> 

        <div className="Ola">
          <h3>Olá Camila</h3>
          <img src="https://img.freepik.com/vetores-gratis/bonito-astronauta-ouvindo-com-boombox-cartoon-vector-icon-illustratiod-ciencia-tecnologia-icone-conceito-isolado-vetor-premium-estilo-de-desenho-animado-plano_138676-4162.jpg?w=2000"/>
        </div>
        
        <button className="botaocarrinho" onClick={(tela)=>trocarTela(2)}>
          
          <img src={carrinho}/>
          
        </button>
      </HeaderContainer>
   
  );
}
