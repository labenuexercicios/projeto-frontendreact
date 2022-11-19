import styled from "styled-components"

export const ContainerWealcome = styled.main`

text-align:center;
> img {
    width:100%;
}
> div {
    display:flex;
    width:80vw;
    justify-content:space-around;
  margin: 0 auto;
   
}



.contaniners-destaques{
    margin-top:16px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    gap	:4px;


    
 

    h2{
 width:30vw;
 text-align:center;
 color:#1A2059;
 background-color:whitesmoke;
 padding:4px;
    }
    img{
        width:40%;
        margin-top:8px;
    
        padding:8px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;

    }


}


`