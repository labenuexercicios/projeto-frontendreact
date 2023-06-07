import { CardContainer } from "./ProductCardStyle";

const ProductCard = (props) => {
  // console.log(props)
  const productData = props.produtos.map((element, index) => {
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
