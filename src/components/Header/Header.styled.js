import styled from "styled-components"

export const HeaderContainer = styled.header`

    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-around;
    width: 88.5vw;
    height: 15vh;
    background-color: lightslategrey;
    align-items: right;  
    z-index: 10;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.25);
    
  
   a {
    font-size: 25px;
    margin-top:30px;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; 
    }
    

 
.button-group {
        display: flex;
        align-items: center;
            
}
.button-produtos{
         width: 170px;
        
         background-color: white;
         
}
.pesquisa-btn{
    width: 170px;
    height: 50px;
    padding:20px;
    margin-top:30px;
   

}
button {
        background-color: gray;
        border: none;
        width: 50px;
        height: 50px;
        margin: 0 4px;
        // border-radius: 50%;

    :hover {
            cursor: pointer;
            filter: brightness(1.1);
        }

    :active {
            filter: brightness(0.95);
        }
}

    .cart-btn {
        position: relative;
        border-radius: 50%;
        
    }
    .cart-btn img{
        width: 100%;
        height: 50px;
        background-color: white;
        
    }

    .cart-badge {
        position: absolute;
        top: 10%;
        right: 10%;
        border-radius: 50%;
        background-color: white;
        height: 18px;
        width: 18px;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`