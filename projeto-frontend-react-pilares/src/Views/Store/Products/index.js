import React from 'react';
import {Page, FormFilter, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer, InputText} from './styled'

import { Checkbox } from './../../../Components/Filter/checkbox';
import dataProducts from './../../../Data/dataProducts'
import { useState } from 'react';
import { CardProduct } from '../../../Components/ProductsList/CardProduct/index';
import { CartClient } from '../../../Components/Client/CartClient';


export function Products({img1}, {product}) {
img1="https://th.bing.com/th?id=OP.vupysievYvdBpw474C474&o=5&pid=21.1"

  const [products , setProducts] = useState([...dataProducts]) 

  const [minPrice, setMinPrice] = useState(30)

  const [maxPrice, setMaxPrice] = useState(300)
  
 const [carrito, setCarrito] = useState([]);


 const [total, setTotal] = useState(0);
 
 const productTotal = (a, b)=>{

return a * b

}



 const addCart = (product) => {
     if (carrito.some((productCart) => productCart.id === product.id)) {
         setCarrito(
             [...carrito].map((productCart) => {
                 if (productCart.id === product.id) {
                     productCart.quantity++;
                     return productCart;
                 }
                 return productCart;
             })
         );
     } else {
       
         setCarrito((currentState) => [
             ...currentState,
             {...product, quantity: 1 },
         ]);
     }
 };
 const lessProduct = (product) => {
     if (product.quantity <= 1) {
         setCarrito((currentState) => [...currentState].filter((cartProduct) => cartProduct.id != product.id));
     } else {
         setCarrito((currentState) => {
          
             return [...currentState].map((productCart) => {
                 if (productCart.id === product.id) {
                 
                     productCart.quantity -= 1;
                 }
                 return productCart;
             });
         });
     }
 };

 const filterName = (value) => {
  console.log(products, value);
   setProducts([...dataProducts].filter((product) => product.name.toLowerCase().includes(value.toLowerCase())));
 }

 const filterPriceMin = (value) => {
  console.log(value);
minPrice !== value ?

   setProducts([...dataProducts].filter((product) =>
    product.price >= value)  )
    :
  
setMinPrice(30)
  
  }
  const filterPriceMax = (value) => {
    console.log( value);
 (maxPrice && maxPrice !== value) ?
  
     setProducts([...dataProducts].filter((product) =>
      product.price <= value)  )
      :
    
  setMinPrice(200)
    
    }
  
const handleFiltrados = (maxPrice, minPrice, nameProducts) =>{
  filterName(nameProducts);
  filterPriceMin(minPrice);
  filterPriceMax(maxPrice);
}
  return (
    
      <Page>  

      <MainCtn>
   
  
  
     
  
      
         
  <AsideRight>         <SectionTitle>
        Minhas COMPRAS
   
</SectionTitle> 
<table>
  <thead>
    <tr>
      <th rowSpan="4">Produtos</th>
    </tr>
  </thead>
  <tbody>
  <tr>
                    <td>Produto </td>	
                    <td> Quantidade: </td>	 
                    <td>TOTAL </td>
                    <td colSpan="2">
                   EDITAR
                   </td>
      </tr>
    {
            carrito.length >= 1 ? (
              
                carrito.map((cartProduct) => ( <
                    tr key = { cartProduct.id } >
            
                    <td>R$ {productTotal( cartProduct.quantity,  cartProduct.price)}</td>
             
                     <td>  
                      <CartClient/>
                      </td>
                      <td>
                          <button onClick = {
                        () => lessProduct(cartProduct)
                    } >Deletar 1</button>
                    </td><td>	 <button onClick = {
                        () => addCart(cartProduct)
                    } > <i className = "fa-solid fa-cart-plus" > </i>+1</button >
                  
                  </td>
                  
                  </tr>
                )
                )
           ) : ( 
              <tr>
              <td Span="4">
               Carrinho Vazio... 
            </td>
               </tr>

               )
        }
        </tbody>
                  <tfoot>
                    <tr>
                   

                    </tr>
                  </tfoot>
                  </table>	
    <FormContainer>
                  <SectionTitle>
         FILTRAR BUSCA :
   
</SectionTitle>
    <FormFilter onChange={handleFiltrados}>


          
					<label htmlFor="minPrice" class="form-label">  Preco Minimo:</label>
				 <Label>	<InputText type="number" id="minPrice"  min="30" placeholder="R$30" onChange={(e)=>filterPriceMin(e.target.value)}
          />  </Label>

<label htmlFor="maxPrice" class="form-label">  Preco Maximo:</label>
				 <Label>	<InputText type="number" id="maxPrice"  min="30" max="200" placeholder="R$200" onChange={(e)=>filterPriceMax(e.target.value)}
          />  </Label>
				</FormFilter>
      

</FormContainer>
          </AsideRight> 
          <SectionCtn> 
            <SectionTitle>
(TOTAL DE PRODUTOS :{products.length} )
<SectionTitle>


    

 
      <br/>  
      
			<InputText type="text" id="productName"  placeholder=" Modelo" onChange={(e)=>filterName(e.target.value)}
          /> 
</SectionTitle>

{products.map(product=>
        <ArticleBox key={product.id}>
           
<CardProduct product={product}/>


<ButtonCard1 onClick = {() => addCart(product)}>
  <i className = "fa-solid fa-cart-plus" > </i>+1Produto
  </ButtonCard1>




    </ArticleBox>
)} 

          </SectionCtn>
  </MainCtn>
  </Page>


    );
  }