import React from 'react';

import { GlobalStyled } from './globalStyled';
import  {DivModal, DivCtn, Div50, DivRow, HeaderCtn2, HeaderCtn, InputNumber, Page, FormFilter, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer, InputText} from './styled'

import { HeaderNav } from './Partials/HeaderNav/index';
import { Footer } from './Partials/Footer/index';
import dataProducts from './Data/dataProducts'
import { useState } from 'react';
import { CardProduct } from './Components/ProductsList/CardProduct/index';
import { Box3 } from './Partials/HeaderNav/styled';


function App() {
  const [modalDisplay, setModalDisplay] = useState(0);
  console.log(modalDisplay)
  const [products , setProducts] = useState([...dataProducts]) 
const [pages , setPages] = useState(1)
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
  const closeModal = (modalDisplay)=>{
    setModalDisplay(0)
  }
const handleFiltrados = (maxPrice, minPrice, nameProducts) =>{
  filterName(nameProducts);
  filterPriceMin(minPrice);
  filterPriceMax(maxPrice);
}
  return (
    
      <Page>  
        <GlobalStyled/>
       
        <HeaderNav
        modalDisplay={modalDisplay}
        setModalDispay={setModalDisplay}
        />
 
 
 <DivModal modalDisplay={modalDisplay} >
 <button onClick={closeModal}>X</button>

 <Div50>
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
                    <td> { cartProduct.name } </td>	
                    <td> { cartProduct.quantity } </td>	 
                    <td>R$ {productTotal( cartProduct.quantity,  cartProduct.price)}</td>
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
                  </table>	</Div50>
                  
                  
                  <Div50></Div50>
    </DivModal>
   
  

          {pages === 2?
          (
            <MainCtn>            
  
     
  
      
         
  <AsideRight>     

  <FormContainer>
                <SectionTitle>
Filtros
</SectionTitle>
  <FormFilter onChange={handleFiltrados}>


        
        <label htmlFor="minPrice" class="form-label">  Preco Minimo:</label>
      <InputNumber type="number" id="minPrice"  min="30" placeholder="R$30" onChange={(e)=>filterPriceMin(e.target.value)}
        />  

<label htmlFor="maxPrice" class="form-label">  Preco Maximo:</label>
    <InputNumber type="number" id="maxPrice"  min="30" max="200" placeholder="R$200" onChange={(e)=>filterPriceMax(e.target.value)}
        />  	
        <label htmlFor="productName" class="form-label"> Modelo:</label>

      <InputText type="text" id="productName"  placeholder="Astro Basket" onChange={(e)=>filterName(e.target.value)}
        />   
        
      </FormFilter>
    

</FormContainer>
        </AsideRight> 
          <SectionCtn> 
 
<SectionTitle>


    <span>(TOTAL DE PRODUTOS :{products.length} )</span>

 
      <br/>  
      
		
</SectionTitle>

{products.map(product=>
        <ArticleBox key={product.id}>
           
<CardProduct product={product}/>


<button onClick = {() => addCart(product)}>
  <i className = "fa-solid fa-cart-plus" > </i>+1Produto</button >




    </ArticleBox>
)} 

          </SectionCtn>
          </MainCtn>):
          (
            <MainCtn>
            <DivCtn>
              <DivRow>
               
                    <Div50>

                    </Div50>
                    <Div50>
                    <h2>
                      DETALHES
                    </h2>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.</p>
                   
                  </Div50>
               
              </DivRow>
            </DivCtn>  

            </MainCtn>          )
}<Footer/>
  </Page>


    );
  }


  export default App