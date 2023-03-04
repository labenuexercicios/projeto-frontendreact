import React from 'react';

import { GlobalStyled } from './globalStyled';
import  {DivModal, DivCtn, Div50, DivRow, ButtonCard1, Small, InputNumber, Page, FormFilter, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer, InputText} from './styled'
import { OrderCategories } from './Components/Order/OrderCategories/index';
import { HeaderNav } from './Partials/HeaderNav/index';
import { Footer } from './Partials/Footer/index';
import dataProducts from './Data/dataProducts'
import { useState } from 'react';
import { CardProduct } from './Components/ProductsList/CardProduct/index';
import { Box3 } from './Partials/HeaderNav/styled';

import {ShopList} from './Views/Shop/index'


function App() {
  const [modalDisplay, setModalDisplay] = useState(0);
  console.log(modalDisplay)
  const [products , setProducts] = useState([...dataProducts]) 
const [pages , setPages] = useState(1)
  const [minValue, setMinValue] = useState(1)

  const [maxValue, setMaxValue] = useState(200)
  
 const [carrito, setCarrito] = useState([]);
const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWdSs4pkmV1WIkoIJT5drPxc8tFc2H98hIw&usqp=CAU"

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
    if(Number(value) < maxValue){
      setMinValue(Number(value))
      setProducts([...dataProducts].filter((product) => product.price <= maxValue && product.price > minValue))
    }
  }
 const filterPriceMax = (value) => {
  if(Number(value) > minValue){
    setMaxValue(Number(value))
  }
 }


  const closeModal = (modalDisplay)=>{
    setModalDisplay(0)
  }
/*const handleFiltrados = (maxPrice, minValue, nameProducts) =>{
  filterName(nameProducts);
  filterPriceMin(minValue);
  filterPriceMax(maxPrice);
}*/
 return (
    
      <Page>  
        <GlobalStyled/>
       
        <HeaderNav
        modalDisplay={modalDisplay}
        setModalDispay={setModalDisplay}
        pages={pages}
        setPages={setPages}
        />
 
 
 <DivModal modalDisplay={modalDisplay} >


 <Div50> <ButtonCard1 onClick={closeModal}>X</ButtonCard1>
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
                  
                  
                  <Div50>
          <h2>Total do</h2>

                  </Div50>
    </DivModal>
   
  

          {pages === 1?
          (
            <MainCtn>            
  
     
  
      
         
  <AsideRight>     

  <FormContainer>
                <SectionTitle>
Filtros
</SectionTitle>

<FormFilter>

        <OrderCategories/>
        
        <label htmlFor="minValue" class="form-label">  Preco Minimo:</label>
      <InputNumber type="number" id="minValue" name="minValue" min="1" placeholder="R$30" value={minValue} onChange={(e)=>filterPriceMin(e.target.value)}
        />  

<label htmlFor="maxPrice" class="form-label">  Preco Maximo:</label>
    <InputNumber type="number" id="maxValue" name="maxValue"  value={maxValue}  placeholder="R$200" onChange={(e)=>filterPriceMax(e.target.value)}
        />  	
        <label htmlFor="productName" class="form-label"> Modelo:</label>

      <InputText type="text" id="productName"  placeholder="Astro Basket" onChange={(e)=>filterName(e.target.value)}
        />   
        
  </FormFilter>
    <hr/>
    <Small>TOTAL DE PRODUTOS :{products.length} </Small>


</FormContainer>
        </AsideRight> 
          <SectionCtn> 
 
<SectionTitle>


    <span>PRODUTOS</span>


 
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
          
          <DivRow>
               
               
                    <Div50>
      
        <h2>React JS</h2>

        <div class="camisa">
            
            <div class="camisa__contenido">
                <p>Maecenas consectetur ultricies mi vel venenatis. Curabitur risus tellus, congue non tellus at, semper dapibus turpis. Duis pellentesque, risus sit amet placerat porttitor, tortor augue volutpat ante, non dignissim odio ligula at arcu.</p>

              
                    <select class="formulario__campo">
                        <option disabled="" selected="">Seleccionar Talla</option>
                        <option>Chica</option>
                        <option>Mediana</option>
                        <option>Grande</option>
                    </select>
                    <input class="formulario__campo" type="number" placeholder="Cantidad" min="1"/>
                    <input class="formulario__submit" type="submit" value="Agregar al Carrito"/>
</div></div>
                  </Div50>
                  </DivRow>
               )
}<Footer/>
  </Page>


    );
  }


  export default App