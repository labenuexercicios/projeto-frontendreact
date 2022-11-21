import styled from "styled-components"

export const ContaninerCardPurchase = styled.section`

h1, > p {
    color:darkgray;
}
> p {
    margin-bottom:16px;
}


`
export const ContainerCard = styled.article`

    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    border-radius:8px;
    margin:4px;
    border-left:5px solid;
    border-left-color:${(props)=>{
       switch(props.status){
        case 1:
        return "green"
        case 2:
        return "yellow"
        case 3:
        return "red"
       }
    }};

    .header-card{
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:14px;
        padding:4px;
        .color{
            color:${(props)=>{
       switch(props.status){
        case 1:
        return "green"
        case 2:
        return "yellow"
        case 3:
        return "red"
       }
    }};
    font-weight:bold;
        }
        
    }

.info-card{
    display:flex;
    img{
        width:60px;
        height:60px;
        padding:8px;
    }
    > div{
        padding-top:8px;
        color:darkgray;
        font-size:12px;
        
        p{
            color:black;
            font-size:10px;
        }
    }
}





`

