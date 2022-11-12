import styled from "styled-components";

export const FilterContainer = styled.section`
border:1px solid black;
width:20%;



`

export const PriceRangeContainer = styled.div`

    background-color:white;
    padding:10px;
    padding-top:5px;

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
        padding:4px 8px;


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

`



