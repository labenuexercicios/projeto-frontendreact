
import styled from "styled-components";

export const ContainerCard = styled.div`
    /* width: 100%;     */
    flex: 1 1 100%;
    margin: 0 auto;

`;

export const Card = styled.div`
    display: flex;
    gap: 1rem;    
    flex: 1 1 100%;
    flex-wrap: wrap;
    justify-content: center;

 `;

export const Item = styled.div`        
    flex: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 400px;
    height: 450px;
    padding: 5px;
    margin: 10px;
    background-color: #fff;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    box-shadow: rgb(0 0 0 / 20%) 0px 2px 6px;
    border-radius: 5px;

    @media(max-width: 768px){
        display: grid;
        width: 95%;
        height: fit-content;
        grid-template-columns: 1fr 2fr;
        grid-template-rows: 150px;
        grid-template-areas: "image info" ;
        justify-content: center;
    }
`;

export const ContainerImage = styled.div`
    grid-area: image;    
`
export const Image = styled.img`
    width: 60%;
    width: 70%;
    object-fit: cover;
    z-index: 999;
    margin-top: 15px;
    border-radius: 5px;

    @media(max-width: 768px){
        width: 100%;          
    }
 
`;

export const ContainerInfo = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: flex-start;  
    height: 140px;
    width: 68%;
    position: absolute;
    bottom: 0;
    grid-area: info;

    @media(max-width:768px){
        width: 100%;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    grid-area: "info";

    width: fit-content;
`;

export const Title = styled.span`
    font-size: 0.875rem;
    margin-bottom: 10px;
    color: #666666;
`;

export const OldPrice = styled.del`
    font-size: 0.75rem;
    color: #666666;
    margin-bottom: 10px;  

`;

export const Price = styled.span`
    font-size: 1.125rem;
    font-weight: bold;
    color:#e63946;
`;

export const Xtime = styled.span`
    font-size: 0.875rem;
    display: block;
    color: rgb(123, 123, 123);
    margin-bottom: 7px;
`;
export const Button = styled.button`
    width: 100%;
    height: 40px;
    color: #fff;
    border: none;
    background-color: #e63946;
    border-radius: 6px;
    cursor: pointer;
    :active{
        transform: scale(.9);
        transition-duration: 300ms;
    }
    :hover{
        color: rgba(0,0,0,.6)
    }
    @media(max-width:768px){
        font-size: 80%;
        bottom: 23px;
        right: 13px;
        padding: 5px;
        width: fit-content;
        display: block;
        height: fit-content;        
    }
`;



