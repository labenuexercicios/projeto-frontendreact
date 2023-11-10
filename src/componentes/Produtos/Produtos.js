import { ProdutosCard } from "./styleProdutos";

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
    const FormataMoeda = (valor) => {
      if (valor > 0) {
        let numberFormat = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(valor);
        return numberFormat;
      }
    };
    const novoValor = FormataMoeda(props.preco)
  return (
    <ProdutosCard>
      <img src={props.imagem} alt="" />
      <h4>{props.nomeDoProduto}</h4>
      <p>{novoValor}</p>
      <button onClick={() => adicionaCart(props.id)} className="btAddCarrinho">Adicionar</button>
    </ProdutosCard>
  );
}

export default Produtos;