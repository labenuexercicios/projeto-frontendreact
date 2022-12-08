import styled from "styled-components";

export const FooterStyle = styled.footer `
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap');
    background-color: #404040;
    color: white;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 5px;
    article{
        display: flex;
        justify-content: space-around;

        img{
            width: 10%;
        }

        article{
            display: flex;
            align-items: center;
            gap: 8px;
        }

        ul{
            display: flex;
            gap: 50px;
            list-style: none;

            li{
                transition: 0.5s;
                :hover{
                    color: #FF008A;
                }
            }
        }
    }

    @media screen and (min-width: 58px) and (max-width: 483px) {
        font-size: 10px;
    }
    @media screen and (min-width: 484px) and (max-width: 1030px) {
        font-size: 10px;
    }
`