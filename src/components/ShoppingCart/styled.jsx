import styled from "styled-components";

export const Container=styled.div`
    
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    min-width: 350px;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    padding: 10px 20px;
    z-index: 9999;
    background-color: #ffffff;
    
    display: flex;
    /* justify-content: space-between; */
    justify-content: center;
    flex-wrap: wrap;

    border-radius: 5px;
    font-family: Arial, sans-serif;
    color: #666666;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    img{
        width: 80px;
    }

`;

const LogoS = styled.div`
    display: block;
`

export const Title=styled.p`
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 15px;
`;

export const SubTitleProd=styled(Title)`
    font-size: 1rem;
    padding-top: 15px;
`
export const SubTitleAmount=styled(SubTitleProd)`
    margin-bottom: 45px;   
`
export const SubTitlePrice=styled(SubTitleAmount)`
      
`

export const Products=styled.div`
    display: flex;
    flex-direction: column;
    width: 700px;
    height: fit-content;
    padding: 15px;
    /* border-bottom: 1px solid rgba(102, 102, 102, 0.3); */
    
    @media(max-width:1201px){
        width: 100%;    
    }

`;

export const Summary=styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    min-height: fit-content;
    background-color: #eeeeee;
    border-radius: 5px;
    padding: 15px;
    line-height: 1.5;

    ul{
        li{
            display: flex;
            justify-content: space-between;
        }
        div{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        p{
            text-align: right;
            font-size: 0.8rem;
        }
    }
   
        
    @media(max-width:1201px){
        min-width: 100%;        
    }

`;

export const HeaderDetail=styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px dotted #666666;
`;

export const HeaderTitle=styled.div`
    display: flex;
    
`	 
export const ContainerItem=styled.div`
    width:50%;
    min-width: 250px;
`;

export const ContainerAmount=styled.div`
    width:85px;
    text-align: center;
`;

export const ControlAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 20px;
    margin: 0 auto;
    /* border: 1px solid rgba(102, 102, 102, 0.3); */
    padding: 10px 5px;
    border-radius: 6px;
    background-color: rgba(102, 102, 102, 0.3); ;
 
    img{
        width: 20px;
        filter: var(--colorSvg);
        cursor: pointer;
        :active{
        transform: scale(1.3);
        transition-duration: 300ms;
    }
    span{
        font-weight: 700;
    }
    }
`;

export const ContainerPrice=styled.div`
    width:230px;
    text-align: center;  
`;

export const ItemDetail=styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    img{
        margin-bottom: 15px;
    }
`;

export const Price=styled.p`
        font-size: 1.2rem;
        font-weight: 700;
`;

export const OldPrice=styled.p`
        font-size: 0.8rem;
        text-decoration: line-through;
`;

export const Button=styled.button`
    width: 100%;
    height: 40px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    color: #fff;
    border: none;
    background-color: #e63946;
    border-radius: 6px;
    cursor: pointer;
    :active{
        transform: scale(.9);
        transition-duration: 300ms;
    }
`;

export const ButtonRemove=styled(Button)`
    height: 16px;
    background-color: transparent;
    color: #666666;
    margin: 10px 0;   

`

