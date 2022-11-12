import styled from "styled-components";
import backgroundImg from '../../assets/background-header.png'

export const HeaderContainer = styled.header`
display:flex;
height:100px;
width:100%;
align-items:center;
justify-content:space-between;
background-image:url(${backgroundImg});
-webkit-box-shadow: 0px 4px 5px 0px rgba(24,36,97,0.43);
-moz-box-shadow: 0px 4px 5px 0px rgba(24,36,97,0.43);
box-shadow: 0px 4px 5px 0px rgba(24,36,97,0.43);

 .logo{
    height:100%;
   
 }

 .input-endereco{
   
    width:50%;
    div{
        display:flex;
    }

    img{
        width:20px;
    }
    p{
        color:white;
        font-size:10px;
    }
    input{
        width:100%;
    }
    
 }

 >img{
    height:70%
 }


 .cart{
    height:50%;
    margin-right:32px;
 }







`

// export const Logo = styled.img`
// height:100%;
// grid-column:1/2;
// grid-row:1/-1;
// padding:8px;
// `
// export const InputSearchBar = styled.input`
// grid-column:2/3;
// grid-row:2/-1;
// width:100%;
// margin: 8px 0;
// `
// export const EnderecoHeader = styled.div`
// display:flex;
// color:white;
// grid-column:2/3;
// grid-row:1/2;
// width:100%;
// align-items:center;
// justify-content:center;

// `
// export const BotoesCadastro = styled.div`
// grid-row:1/-1;
// display:flex;
// justify-content:space-around;
// padding: 2vh;

// `