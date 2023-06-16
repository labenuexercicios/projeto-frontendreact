import { CardContainer } from "./ProductCardStyle";

const ProductCard = (props) => {
  console.log(props)
  const productData = props.produtos
  .filter(element => {
    return element.name.toLowerCase().includes(props.searchFilter.toLowerCase())
  })
  .filter(element => {
    return props.minFilter ? element.value.includes(props.minFilter) : element
  })
  .filter(element => {
    return props.maxFilter ? element.value.includes(props.maxFilter) : element
  })
  .sort((a, b) => {
    if(props.ordination === "Crescente") {
      return a.name.localeCompare(b.name)
    } else if (props.ordination === "Decrescente"){
      return b.name.localeCompare(a.name)
    } 
  })
  .map((element, index) => {
    // console.log(element);
    return (
     
        <div key={element.id}>
          
          <img src={element.imageUrl} />
          <span>
            <p>{element.name}</p>

            <hr/>

            <p>R$ {element.value}</p>
           
            <button onClick={props.handleClick}>Adicionar ao carrinho</button>
          </span>
        </div>
        
      
    );
  });

  return (
    <CardContainer>
      {productData}
    </CardContainer>

  )
  
};

export default ProductCard;
