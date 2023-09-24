import { ProdutosCard } from "./styleProdutos";
// import mascara01 from "../Imagens/mascara01.png"

export function Produtos(props) {
  
  const adicionaCart = (id) => {
    const novoCart = props.cart.find(item => item.id === id) 
   
    if (novoCart === undefined){
        props.setCart([...props.cart, {...props.produtos, quantidade: 1}])
      }
      else{
        const quantidade = props.cart.map((item)=> {
          if (item.id === props.produtos.id){
            return {...novoCart, quantidade: novoCart.quantidade + 1}
          }
          else{
            return item
          }
        })
        props.setCart(quantidade)
      }
    }
  
   
  

  return (
    <ProdutosCard>
      <img src={props.imagem} alt="" />
      <h4>{props.nomeDoProduto}</h4>
      <p>R$ {props.preco}</p>
      <button onClick={() => adicionaCart(props.id)}>Adicionar carrinho</button>
    </ProdutosCard>
  );
}

export default Produtos;