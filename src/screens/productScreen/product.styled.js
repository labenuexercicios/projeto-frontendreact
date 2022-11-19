import styled from "styled-components"

export const ContaninerProduct = styled.main`
display:flex;
flex-direction:column;
.product-view{
    display:flex;

.image-product{
    display:flex;


    .gallary-product{
        display:flex;
        flex-direction:column;
        img{

            width:50px;
            padding:2px;
            margin-top:4px;

        }
      
    }
    > img{
        width:30vw;
    }
    

}
.info-product{
    display:flex;
    flex-direction:column;
    width:40vw;
    padding: 0 16px;


    .stars{
        display:flex;
        img{
            height:16px;
        }
    }

    .price{
        display:flex;
        height:40px;
      
        p:first-child{
            margin-bottom:auto;
            color:white;
        }
        > span{
            margin: auto 0  auto 35%;
        }
        p:last-child{
            margin-top:auto;
            margin-left:16px;
        }     
    }
    .about-product{
        display:flex;
        flex-direction:column;

        select{
        }

        h2{
            padding-left:8px;
        }

        ul{
            padding-left:32px;
            list-style-type:none;
            img{
                width:30px
            }
        }

    }


}
.addToCart-product{
    width:20vw;
    display:flex;
    flex-direction:column;
    margin-left:auto;
    img{
        width:20px;
    }

    .fav{
        display:flex;
        justify-content:space-around;
    }


}


}



`