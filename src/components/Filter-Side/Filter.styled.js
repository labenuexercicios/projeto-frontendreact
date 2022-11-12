import styled from "styled-components";

export const FilterContainer = styled.section`

width:20%;
border-radius:4px;
padding-top:5px;
padding-right:5px;
box-shadow: inset -3px -2px 10px 0px rgba(180,180,180,0.20);



h1{
        text-align:center;
    }




`

export const PriceRangeContainer = styled.div`

    background-color:white;
    padding:10px;
    padding-top:5px;
    margin-bottom:8px;
  
    >h2{
        text-align:center;
    }

    .price-input{
        padding-bottom:10px;
        display:flex;
       
    }

    .price-input > div {
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
        width:80%;

        input{
            text-align:center;
            -moz-appearance:textfield;
             width:60px;
        }
        input::-webkit-inner-spin-button,
        input::-webkit-outer-spin-button{
                -webkit-appearance:none;
            }
    }

    .slider{
        height:5px;
        margin-top:6px;
        background:#ddd;
        border-radius:5px;
        position:relative;
       
        display:flex;
        align-items:color-interpolation-filters;


        .progress{
            height:5px;
            
          
            left:${(props) => props.stringPercentageMin};
            right:${(props) => props.stringPercentageMax};
            /* right:0% */
            position:absolute;
            border-radius:5px;
            background-color:blue;
        }       

       
    }

    .range-input{
        position:relative;
        input{
            position:absolute;
            top:-5px;
            height:5px;
            width:100%;
            pointer-events:none;

            background:none;
            -webkit-appearance:none;       
         }
         input::-webkit-slider-thumb{
            height:17px;
            width:17px;
            border-radius:50%;
            pointer-events:auto;

            -webkit-appearance:none;
            background:blue;

         }
         input::-moz-range-thumb{
            height:17px;
            width:17px;
            border-radius:50%;
            pointer-events:auto;
            border:none;

            -moz-appearance:none;
            background:blue;

         }
    }


`

export const CategoriesContainer = styled.div`
display:flex;
flex-direction:column;
padding:8px;
margin-bottom:8px;

div{
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-end;
    gap: 8px;
    

}

`



