import React from 'react';
import { Naves } from './produto';
import  { useState } from 'react';
import { Carrinho } from './carrinho';
import { Filtros } from './filtro';
import { Ordenar } from './ordenar';
import {ContainerApp, Image, ContainerProduto, Img, } from './main.styled'
import { ImagemFundo } from './main.styled';
import { ImagemEsquerda } from './main.styled';
import { ImagemDireita } from './main.styled';
import {Header} from "./header"
import {Footer} from "./footer"




const preço = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    
    minimumFractionDigits: 0,
    maximumFractionDigits:0,
    })



    export function Main() {

        const [ordenar, setOrdenar] = useState("");
        const [filtrarNome, setFiltrarNome] = useState("");
        const [valorMin, setValorMin] = useState(-Infinity);
        const [valorMax, setValorMax] = useState(Infinity);

        const [addCarrinho, setAddCarrinho] = useState([])

       
     const mandarCarrinho = (itemCarrinho) => {
     const novoCarrinho = [...addCarrinho]

     const produtoNovo = novoCarrinho.find(
      (novoItem) => novoItem.id === itemCarrinho.id
     )
     if(!produtoNovo) {
      const novoProduto = {...itemCarrinho, quantidade:1}
      novoCarrinho.push(novoProduto)
     }else{
      produtoNovo.quantidade++
     }
     const virarString = JSON.stringify(novoCarrinho)
     localStorage.setItem("local", virarString)
     setAddCarrinho(novoCarrinho)
  }
       
     const quantidadeNoCarrinho = (itemCarrinho) => {
     const novoCarrinho = [...addCarrinho]

      const produtoNovo = novoCarrinho.find(
        (novoItem) => novoItem.id === itemCarrinho.id
      )
      produtoNovo.quantidade++
      const virarString = JSON.stringify(novoCarrinho)
      localStorage.setItem("local", virarString)
      setAddCarrinho(novoCarrinho)
     }
     
      const quantidadeForaCarrinho = (itemCarrinho) => {
      const novoCarrinho = [...addCarrinho]

      const produtoNovo = novoCarrinho.find(
        (novoItem) => novoItem.id === itemCarrinho.id
      )
      if(produtoNovo.quantidade > 1){
      produtoNovo.quantidade--
    } 
      const virarString = JSON.stringify(novoCarrinho)
      localStorage.setItem("local", virarString)
      setAddCarrinho(novoCarrinho)
     }

     const deletarItem = (itemCarrinho) =>{
      
      const filtroDelete = addCarrinho.filter(
      (item) => item.id !== itemCarrinho.id)
      const virarString = JSON.stringify(filtroDelete)
      localStorage.setItem("local", virarString)
      setAddCarrinho(filtroDelete)
    }
   
    const filterNome = () => {
      const novoArray = (Naves.filter
      ((item) => { 
        console.log(item);
        return item.nome.toLowerCase().includes(filtrarNome.toLowerCase())})
      .filter((item) => {
        return item.valor >= valorMin || valorMin === "" 
      })      
      .filter((item) => {
        return item.valor <= valorMax || valorMax === "" 
      })
      )
      if(novoArray.length === 0){
        alert("Busca não encontrada!") 
      }
      return novoArray
    }
    
     
      
        return (
          <>

          
            <Header/>
            <ContainerApp >
              
             

            <ImagemEsquerda>
            
      
              <Filtros
                filtrarNome={filtrarNome}
                setFiltrarNome={setFiltrarNome}
                valorMax={valorMax}
                setValorMax={setValorMax}
                valorMin={valorMin}
                setValorMin={setValorMin}
              />


              </ImagemEsquerda>
              <ContainerProduto>
              
              <ImagemFundo>
                
                <Ordenar
                  ordenar={ordenar}
                  setOrdenar={setOrdenar}
                />

                 
      
                {filterNome()
                
                  .sort((nome1, nome2) => {
                    if (ordenar === "Crescente") {
                      if (nome1.valor > nome2.valor) {
                        return 1;
                      } else {
                        return -1;
                      }
      
                    } else if (ordenar === "Decrescente") {
                      if (nome1.valor < nome2.valor) {
                        return 1;
                      } else {
                        return -1;
                      }
                    }
                  })
                  
                  
      
                  .map((item) => {
                    return (
                      <Img>
                        <li key={item.id}>
                          <em><b>{item.nome}</b></em>
                          <p>{preço.format(item.valor)}</p>
                          <button onClick={()=>{mandarCarrinho(item)}} >Adicionar ao carrinho</button>
                          <p><Image src={item.img} width="320" height="205" /></p>
                        </li>
                      </Img>
                    )
                   }
                  )
                  }

                 
                  
                
               
              </ImagemFundo>
              
              
              </ContainerProduto>
              
              <ImagemDireita>
              <Carrinho
              addCarrinho={addCarrinho}
              setAddCarrinho={setAddCarrinho}
              quantidadeNoCarrinho={quantidadeNoCarrinho}
              quantidadeForaCarrinho={quantidadeForaCarrinho}
              deletarItem={deletarItem}

              />
              </ImagemDireita>
      
            </ContainerApp>

            <Footer/>
          </>
        );
      }

    