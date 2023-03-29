import styled from "styled-components";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillYoutube, AiFillWechat } from "react-icons/ai";


export const FooterStyled = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: url("https://labenucommerce.s3.sa-east-1.amazonaws.com/footer.png");
  background-repeat: no-repeat;
  background-size: cover;
  `

export const InfoStore = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 4rem 10rem 2rem 10rem;
  width: 100%;
  margin-top: 4rem;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 2rem 1rem 2rem;
  }

`;

export const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-left: 10rem;
  align-items: center;
  gap: 5rem;
  

  @media screen and (max-width: 1024px) {
    justify-content: center;
    gap: 4rem;
  }

  @media screen and (max-width: 425px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

export const LogoDiv = styled.img`
  width: 18rem;
  height: 100%;
  margin-left: -2rem;
`;

export const OptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  height: 100%;
  align-items: left;

  @media screen and (max-width: 1024px) {
    align-items: center;
  }

  p {
    color: #550A35;
    text-transform: uppercase;
    text-decoration: 0.2rem solid underline #C25A7C;
    text-underline-offset: 0.5rem;
    margin-bottom: 1rem;

    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  li {
    color: #FFF0F5;
    @media screen and (max-width: 425px) {
      font-size: 0.8rem;
    }
  }

  li:hover {
    color: #7E354D;
    cursor: pointer;
  }

  div {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style-type: none;
  }
`;

export const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 1rem 1rem;
  width: 100%;
  background-image: url("hhttps://labenucommerce.s3.sa-east-1.amazonaws.com/footer-1.png");
  margin-top: 2rem;
  text-align: center;

  p {
    font-size: 0.75rem;
    color: #C0C0C0;
  }
`;

export const FacebookIcon = styled(AiFillFacebook)`
  font-size: 1.2rem;
  color: #FFF0F5;
  margin: 0.35rem 0;
`;

export const InstagramIcon = styled(AiFillInstagram)`
  font-size: 1.2rem;
  color: #FFF0F5;
  margin: 0.35rem 0;
`;

export const TwitterIcon = styled(AiFillTwitterCircle)`
  font-size: 1.2rem;
  color: #FFF0F5;
  margin: 0.35rem 0;
`;

export const YoutubeIcon = styled(AiFillYoutube)`
  font-size: 1.2rem;
  color: #FFF0F5;
  margin: 0.35rem 0;
`;

export const WeChatIcon = styled(AiFillWechat)`
  font-size: 1.2rem;
  color: #FFF0F5;
  margin: 0.35rem 0;
`;
