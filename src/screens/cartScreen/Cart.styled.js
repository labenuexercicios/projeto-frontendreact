import styled from "styled-components"

export const ContaninerCart = styled.main`

width:100vw;
display:flex;

 .card-item{
    width:100%
 }


.title{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

     .subtitle{
        display:flex;
        justify-content:space-between;
        padding:2px 8px;
 
        width:100%;
        span{
            img{
                width:16px;
            }
         
        }
    }
}

.carrinho-vazio{
    padding:8px;
}



.resume-cart{
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;


    width:20vw;
    margin:40px 32px 0 16px;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:16px;
    h2{
        width:100%;
        text-align:center;
        color:white;
        padding:4px;
        font-size:20px;
    background-color:#395693;

    }
    > p{
        margin-right:auto;
        padding-left:6px;
    }

    div{
        width:100%;



        p{
           
            /* padding-right:8px; */
            margin-top:4px;
            display:flex;
            justify-content:space-between;
            padding: 0 8px;
            color:grey;
            font-size:14px;
            .r-side{
                font-size:16px;
            }
         
        }
        hr{
            margin-top:16px;
        }

        .subtotal{
            color:black
        }

    }
    button{
        padding:6px;
        width:80%;
        border:none;
        margin-top:8px;

    }

}





`
export const CardProduct = styled.div`
display:flex;
padding:16px 4px;
border-top: 1px solid black;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;






.image-product{
    width:200px;
    height:200px;
background-color:green;

}



.info-product{
display:flex;
flex-direction:column;

> h2{ 
    padding-left:12px;
}
> P{
    color:grey;
    font-size:14px;
    padding-left:12px;
   
}

   
  
       
}

.price-product{
    margin-left:auto;
    display:flex;
    flex-direction:column;
    align-items:flex-end;

    p{
        font-size:18px;
        margin-top:8px;
    }

    .full-price{
        color:${(props)=>props.discount?"grey":"black"};
        text-decoration:${(props)=>props.discount?"line-through":"none"};
    }

   p:last-child{

    font-size:16px;
   }

}

    
    

 



`

export const ManipulationItem = styled.div`
 
        display:flex;
        margin-top:auto;
        margin-right:auto;
        padding:8px;
        flex-direction:column;
        justify-content:flex-end;
       
        align-items:center;
        

    

        > div{
            display:flex;
            align-items:center;
            > img{
                width:28px;
                margin: 4px;
            }
            > input{
            width:32px;
            border:none;
            outline:none;
            text-align:center;
            background-color:#f7f7f7;

            border-radius:1rem;
            font-weight:bold;
            padding:4px;
            }
            
        }
        > img{
        
            width:36px;
        
        }
    
`