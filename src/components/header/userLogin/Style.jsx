import styled from "styled-components";

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    width: 110px;
    @media screen and (max-width: 500px) {
        display: none;
    }    
`
export const LoginImgStyled = styled.img`
    width: 40px;
    height: 50px;         
`
export const LoginButtons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const ButtonLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;
  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
  background-origin: border-box;
  width: 70px;
  font-size: 12px;
`
export const ButtonSingUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', sans-serif;
  border-radius: 6px;
  border: none;
  color: #fff;
  background: linear-gradient(180deg, #4B91F7 0%, #367AF6 100%);
  background-origin: border-box;
  font-size: 12px;
`
