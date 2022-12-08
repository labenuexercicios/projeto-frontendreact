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
`