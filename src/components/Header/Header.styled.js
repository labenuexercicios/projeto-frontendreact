import styled from 'styled-components' 
export const HeaderContainer  = styled.header`
    
    display: flex;
    justify-content: space-between;
    
    .button-group{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    button {
        background-color: #cf0e0e ;
        border: 0.4 solid Black;
        width: 70px;
        height: 50px;
        margin: 0.4px;
        :hover{
            cursor:pointer;
            filter: brightness(0.85)
        }
        :active{
            filter:brightness(1.1)
        }
    }
    .tag{
        color: #dcdcdc;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
    }

        
`