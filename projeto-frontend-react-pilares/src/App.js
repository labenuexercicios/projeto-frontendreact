import React from 'react';

import { GlobalStyled } from './globalStyled';
import { OrderCategories } from './Components/Order/OrderCategories';
import  {DivTop, DivTotal, DivModal, CtnType, Div50, DivRow, ButtonCard1, Small, InputNumber, Page, FormFilter, MainCtn, SectionCtn, SectionTitle, AsideRight, Label, ArticleBox, FormContainer, InputText, HeaderCtn2} from './styled'
import { HeaderNav } from './Partials/HeaderNav/index';
import { Footer } from './Partials/Footer/index';
import dataProducts from './Data/dataProducts'
import { useState } from 'react';
import { CardProduct } from './Components/ProductsList/CardProduct/index';
import './App.js'

function App() {
  const [modalDisplay, setModalDisplay] = useState(0);
  console.log(modalDisplay)
  const [products , setProducts] = useState([...dataProducts]) 
const [pages , setPages] = useState(1)
  const [minValue, setMinValue] = useState(1)

  const [maxValue, setMaxValue] = useState(200)
  
 const [carrito, setCarrito] = useState([]);
 const [cartList , setCartList] = useState([]) 
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

  const filterPriceMin = (value) => {
    if(Number(value) < maxValue){
      setMinValue(Number(value))
      setProducts([...dataProducts].filter((product) => product.price <= maxValue && product.price > minValue))
    }
  }
 const filterPriceMax = (value) => {
  if(Number(value) > minValue){
    setMaxValue(Number(value))
    setProducts([...dataProducts].filter((product) => product.price <= maxValue && product.price > minValue))

  }
 }

 const filterName = (value) => {
  console.log(products, value);
   setProducts([...dataProducts].filter((product) => product.name.toLowerCase().includes(value.toLowerCase())));
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
        carrito={carrito}
        setCarrito={setCarrito}
        />
 
 
 <DivModal modalDisplay={modalDisplay} >
 <Div50>
     

 <DivTotal> 
  <button onClick={closeModal}>X Fechar</button>  
    <h2>Total do</h2>
    </DivTotal>
                  </Div50>

 <Div50>
<table>
  <thead>
    <tr>
    <th >Item </th>	
                    <th colSpan="4"> Qtd </th>	 
                    <th>Total </th>
    </tr>
  </thead>
  <tbody>

    {
            carrito.length >= 1 ? (
              
                carrito.map((cartProduct) => ( <
                    tr key = { cartProduct.id } >
                    <td> { cartProduct.name } </td>	
                    <td colSpan="4"> 
                    <button onClick = {
                      () => lessProduct(cartProduct)
                  } > <i class="fa-solid fa-circle-minus"></i> </button>
                    { cartProduct.quantity }
                    <button onClick = {
                      () => addCart(cartProduct)
                  } > <i class="fa-solid fa-circle-plus"></i></button >
                    </td>	 
                    <td>R$ {productTotal( cartProduct.quantity,  cartProduct.price)}</td>
                   
                  </tr>
                )
                )
           ) : ( 
              <tr>
              <td colSpan="6">
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
<CtnType><p>Ordenar por TIPO</p>

<OrderCategories/><br/></CtnType> 
{products.map(product=>
        <ArticleBox key={product.id}>
           


<CardProduct product={product}/>


<ButtonCard1 onClick = {() => addCart(product)}>
  <i className = "fa-solid fa-cart-plus" > </i>+1Produto</ButtonCard1 >




    </ArticleBox>
)} 

          </SectionCtn>
          </MainCtn>):
          (
            <MainCtn>
     


          <DivRow>
                   <button> <i class="fas fa-arrow-left"></i> </button>
                     <button> <i class="fas fa-arrow-right"></i> </button>
                    <DivTop>
                  <SectionCtn>
                  <p>PREÇO</p>
                  <p>DISCONTO: 10%</p>
              </SectionCtn>
                  </DivTop>
                  
            
             </DivRow>
             </MainCtn>
               )     
}<Footer/>
  </Page>


    );
  }


  export default App