import styled from 'styled-components'


export const HeaderContainer = styled.main`
    font-family: 'Stick No Bills', sans-serif; 
    font-size: 25px;
    display: flex;
    position: fixed;
    top: 0;
    background-image: linear-gradient(to right, rgb(28, 56, 70, 0.7) ,rgb(130, 98, 138), rgb(130, 98, 138) , rgb(130, 98, 138) , rgb(130, 98, 138), rgb(130, 98, 138), rgb(28, 56, 70, 0.7));
    border-bottom: 2px solid rgb(139, 164, 176);
    border-left: 2px solid rgb(139, 164, 176);
    border-right: 2px solid rgb(139, 164, 176);
    align-items: center;
    justify-content: center;
    color: rgb(139, 164, 176);
    border-bottom-left-radius : 15px;
    border-bottom-right-radius : 15px;
    height: 75px;
    width: 97%;
    margin-left: 1.5%;
    z-index: 1;

    .rocket{
        border: 2px solid rgb(139, 164, 176);
        border-bottom-left-radius : 15px;
        border-top-left-radius : 15px;
        padding: 0 20px;
    }

    .shopping{
        color: rgb(130, 98, 138);
        background: rgb(139, 164, 176);
        border-top: 2px solid rgb(139, 164, 176);
        border-right: 2px solid rgb(139, 164, 176);
        border-bottom: 2px solid rgb(139, 164, 176);
        border-bottom-right-radius : 15px;
        border-top-right-radius : 15px;
        padding: 0 20px;
    }

  
`