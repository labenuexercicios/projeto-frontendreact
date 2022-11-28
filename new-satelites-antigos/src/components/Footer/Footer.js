import styled from "styled-components"
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'

const FooterStyle = styled.footer`
  background-color: black;
  height: 6vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 10px;

  >div{
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
      width: 5%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
  }

  img{
    width: 16px;
    filter: invert(1);
    &:hover{
      filter: brightness(0.8);
      transition: filter 1s ease-in-out;
    }
  }
`
export const Footer = () => {
  return(
    <FooterStyle>
      <div>
        <p>DESIGNED & BUILT BY LAIS MACEDO</p>
        <div>
          <a href="https://www.linkedin.com/in/laisrmacedo/" target="_blank">
              <img src={linkedin} alt=""/>
          </a>
          <a href="https://github.com/laisrmacedo" target="_blank">
              <img src={github} alt=""/>
          </a>
        </div>
      </div>
    </FooterStyle>
  )
}