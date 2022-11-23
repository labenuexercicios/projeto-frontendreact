import styled from "styled-components"

export const ContainerForm = styled.section`

display:flex;
flex-direction:column;
width:50%;
gap:16px;
input{
    padding:4px;
    border-radius:4px;
    border:1px grey solid;;
}
h2{
    font-size:18px;
    margin-top:8px;
}
span{
    color:blue;
    font-size:12px;
    margin-left:4px;
}
label{
    font-size:12px;
    color:darkgray;
}
.inputNumber::-webkit-outer-spin-button, .inputNumber::-webkit-inner-spin-button{
    -webkit-appearance:none;
}

.header-cadastro{
    display:flex;
    flex-direction:column;
    padding-left:8px;
    p{
        font-size:14px;
        color:darkgray;
    }
}
form{

    .dados-conta{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        margin-bottom:8px;
        gap:8px 4px;        
    }
    .dados-pessoais{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        gap:8px 4px;
        margin-bottom:8px;


        .genero-radio{
            display:flex;
            gap:4px;

        }
        
        .data{
            display:flex;
            align-items:center;
            gap:4px;
            
          
            > input{
                width:60px;
                text-align:center;
               
            }
        }
      
       
        
     

    }
    .endereco{
        display:flex;
        flex-direction:column;
        align-items:flex-start;
        gap:8px;

        .endereco-body{
            display:flex;
            flex-direction:column;
            gap:8px;
            > div{
                display:flex;
                flex-direction:column;
            }
            .numero-input{
                display:flex;
                flex-direction:row;
                padding:4px;
                column-gap:8px;
                align-items:center;

                label{
                    padding-left:4px;
                }

                .number-endereco{
                    width:50px;
                }
                .number-endereco::-webkit-outer-spin-button, .number-endereco::-webkit-inner-spin-button{
                   -webkit-appearance:none;
                }
            }

            .select-estado{
                margin-top:8px;
            }
        }
    
    }
    
}

margin-bottom:32px;

`