import styled from "styled-components";


export const Container = styled.header`
    background-color: #E1E2E2;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #6C7070;
    border-radius: 0 0 15px 15px;

    > .logo{
        margin-left: 10px;
        height: 70px;
        width: 700px;
        display: flex;
        overflow: hidden;
        margin-left: 0 auto;


        > img{
            border-radius:50%;
            border: 4px solid #BCC4C4;
        }
    }

    > .header-things{
        width: 700px;
        display: flex;
        flex-direction: row;
        margin-right:  0;
        justify-content: space-between;
        font-style: italic;
        color: #6C7070;
        :hover {
            cursor: pointer;
            filter: brightness(0.80);
        }
        :active {
            filter: brightness(0.50);
        }
    }


    button{
        :hover {
            cursor: pointer;
            filter: brightness(0.95);
        }
    :active {
            filter: brightness(0.85);
        }
    }

`

