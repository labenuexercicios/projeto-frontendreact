import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    margin-top: 20px;
    background-color: #f1f1f1;
    /* min-height: 20vh; */
    padding-bottom: 20px;

    /* aviso de em desenvolvimento */
    h3{
        color: #ff0000;
        display: inline-block;
        margin: 0 30px;
    }

    li{ 
        list-style: none;
        display: block;  
        width: 33px;
        height: 33px;  
    }   
    ul{
        flex-wrap: wrap;
    }

`;


export const Container = styled.div`
    display: flex;
    /* flex-wrap: wrap; */
    height: fit-content;
    width: 100%;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    
`


export const NetWorks = styled.div`
    
    padding-top: 30px;
    margin-left: 32px;
    width: 30%;

    ul {
        display: flex;
        gap: 1rem;
        align-items: center;
        justify-content: flex-start;

        li{
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 4px;
        }
    }
   
    img{
        width: 90%;
        height: inherit;
        object-fit: contain;
        cursor: pointer;
        :hover{
            filter: invert(12%) sepia(25%) saturate(7074%) 
            hue-rotate(219deg) brightness(103%) contrast(93%);
        }
    }

        width: 100%;
        margin: 0;
        text-align: center;

        ul{
            margin: 15px 0 ;
            justify-content: center;
        }
    
`

export const PaymentsForms = styled.div`
    
    width: 40%;
    min-height: 80px;
    height: fit-content;
    margin-right: 1rem;
    
    ul {
        display: flex;
        align-items: center;
        justify-content: space-between;

        li{
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 4px;
            :hover{
                transform: scale(1.1);
                transition-duration: 200ms;
            }
        }
    }
   
    img{
        cursor: pointer;
        width: 100%;
        height: inherit;
        object-fit: contain;
    }

    /* @media (max-width: 768px){ */
        width: 100%;
        text-align: center;

        ul{
            justify-content: center;
            gap: 1rem;
            margin: 15px 0 ;


        }
    /* } */

`;


export const Info = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;  
    gap: 20px;  
    padding-top: 40px;
    padding-bottom: 50px;
    a{
        display: block;
    }

    @media(max-width:768px){
        flex-direction: column;
        min-height: fit-content;
    }
    `;

export const Box = styled.div`
    width: 25%;
    height: 40vh;
    line-height: 1.5;
    a{
        cursor: pointer;
        :hover{
            filter: invert(12%) sepia(25%) saturate(7074%) 
            hue-rotate(219deg) brightness(103%) contrast(93%);
        }
    }
    p,a{
        font-size: 0.8rem;
    }
    @media(max-width:768px){
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const Title = styled.h2`
    font-size: 14px;
    padding-top: 30px;
    /* line-height: 36px; */
    /* text-shadow: 0.1em 0.1em 0.2em #666666; */
`;

export const TitleInfo = styled.h2`
        font-size: 15px;
        margin-bottom: 10px;
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    min-height: 9vh;
    height: fit-content;
    margin: 10px 0 ;
    background-color: #e63946;
    padding: 15px;
    text-align: center;
`;

export const TitleForm = styled.p`
    color: #fff;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: bold;
    margin-right: 2rem;

    @media(max-width: 768px){
        margin: 0;
    }
`;

export const Filds = styled.div`
    display: flex;
    gap: 16px;

    span{
        /* display: block; */
        width: 50px;
        font-size: 0.75rem;
        color: #575757;
        background: #F7F7F7;
        text-align: center;
    }

    input{
        width: 300px; 
        height: 30px;
        border: 2px solid rgba(208, 207, 207, 0.5);
        padding: 0 5px;
        margin-top: 5px;
        border-radius: 6px
    }

    @media (max-width: 768px){
        flex-direction: column;
        width: 100%;
        /* padding: 15px;        */
        input{
            width: 100%
        }        
    }
`;

export const ContainerFild = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    background-color: #f7f7f7;
    min-height: 60px;
    height: fit-content;
    width: 320px;
    border-radius: 6px;
    overflow: hidden;

    @media(max-width: 768px){
        width: 100%;
    } 
`;

export const Button = styled.button`
    background-color: #17317b;
    color: #fff;
    padding: 8px;
    border-radius: 6px;
    margin: 0;
    cursor: pointer;
    border: none;
    margin: 0 1rem;

    @media(max-width: 768px){
        width: 100%;
        height: 40px;
        margin: 15px 0;
    }

`
export const Medidas = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    height: 50px;
    padding: 0 20px;
    img{
        cursor: pointer;
        width: 60px;
        z-index: 999999;
    }
    button{
        z-index: 999999999999;
    }
    @media(max-width:768px){
        width: 100vw;
    }
`

