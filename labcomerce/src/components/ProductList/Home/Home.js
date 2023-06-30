// import"../componentes/CardVideo.css"
// import InfoProduto from "../InfoProduto/InfoProduto"
import { useState } from "react";
import { CardProdutos, Tela, Painel, PainelInfo, FiltroContainer, ContainerHome } from './styled'
import styled from "styled-components";


const CardsContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
  justify-items: center; */

  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 10px;
  column-gap: 10px;
  
`;


function Home(props) {

    console.log(props)
    console.log(props.maxFilter)
    
   const [ordination, setOrdination] = useState('')
   let num = 0

   const adicionaCarrinho = (produto) => {
    const newP = props.cart.find((item)=>item.id === produto.id)

    if(newP === undefined){
      props.setCart([...props.cart, {...produto, amount:1}]);
    }else{
      const newC = props.cart.map((item)=>{
        if(item.id=== produto.id){
          return{...newP, amount:newP.amount+1}
        }else{
          return item;
        }
      })
      props.setCart(newC)
    }
    
  //   const novoProdutoCart = [...props.cart,produto]
  //  props.setCart(novoProdutoCart);
    
  };

  const deletItemCart = (produto)=>{
    const productDell = props.cart.find((item)=>item.id === produto.id)
if(productDell.amount>1){
const newC = props.cart.map((item)=>{
        if(item.id=== produto.id){
          return{...productDell, amount:productDell.amount-1}
        }else{
          return item;
        }
      })
      
    }else{
      const newC= props.cart.filter((item)=>{
        return item.id != produto.id
      })
      props.setCart(newC)
    }
    
  }
    return(
  <ContainerHome>
  
       
       <FiltroContainer>
        <p>Quantidade de Produtos:{props.amount}</p>
       <select value={ordination} onChange={(e)=>setOrdination(e.target.value)} >
        <option value="">Ordenar</option>
        <option value="Crescente">Crescente</option>
        <option value="Decrescente">Decrescente</option>
      </select>
       </FiltroContainer>
       <CardsContainer>{
        props.produtos.filter((produto)=>{
          if(ordination==='Crescente'){
            return props.produtos.sort((a,b)=>{
               let x = a.name.toUpperCase()
                let y = b.name.toUpperCase()
                return(x===y?0:x>y?1:-1)
            });

          }else if(ordination==='Decrescente'){
            return props.produtos.sort((a,b)=>{
              let x = a.name.toUpperCase()
               let y = b.name.toUpperCase()
               return(x===y?0:x>y?-1:1)
           });
          }else{
            return props.produtos.sort((a,b)=>{
              let x = a.id
               let y = b.id
               return(x===y?0:x>y?1:-1)
           });
          }
        
        }).filter((produto)=>{
          if(props.minFilter!==0){
          return produto.value >= props.minFilter;
          }else {
            return props.produtos;
          }
        }).filter((produto)=>{
          if(props.maxFilter!=0){
            return produto.value <= props.maxFilter;
            }else {
              return props.produtos;
            }
          
        }).filter((produto)=>{
          if(produto.name.toUpperCase().includes(props.searchFilter.toUpperCase())){
            return produto;
          }else if (!props.searchFilter){
          return props.produtos;
          }
          
        }).map(produto =>{
           
           
            return (
                <CardProdutos>
                <img src={produto.imageUrl} alt=""></img>
                <PainelInfo>
                <h4>{produto.name}</h4>
                <h4>R${produto.value.toFixed(2)}</h4>
                <button onClick={()=>adicionaCarrinho(produto)}>Adicionar ao carrinho</button>
                </PainelInfo>
               <p> {(num = num +1)}</p>
                {/* <InfoProduto link='' usuario = {produto.infoProd}/> */}
                </CardProdutos>
              

            )
           

        })
        
       
       }</CardsContainer>
       
       {
       props.setAmount(num)}
       {console.log(num)
       }
        </ContainerHome>
    )
   

   
    
}
export default Home;
