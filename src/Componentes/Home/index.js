import { HomeMain, Order, OrderSelect, QuantidadeDeItens, Div } from "./styled"
import { Produtos } from "./Produtos"


export function Home (props){

   

    return(

        <div>
                
                <Div>
                <QuantidadeDeItens>Quantidade de produtos:</QuantidadeDeItens>


               <Order> Ordenação : <OrderSelect>
               <option value="crescente">Crescente</option> 
               
               <option value="decrescente">Decrescente</option>
               </OrderSelect></Order>
               
               </Div>
        <HomeMain>
            
            <Produtos Products={props.Products}/>
            <Produtos Products={props.Products1}/>
            <Produtos Products={props.Products2}/>
            <Produtos Products={props.Products3}/>
            <Produtos Products={props.Products4}/>
            <Produtos Products={props.Products5}/>
            <Produtos Products={props.Products6}/>
            <Produtos Products={props.Products7}/>
           
       
        
        </HomeMain>




        </div>




        
    )




}