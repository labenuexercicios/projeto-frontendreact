import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /* background-color: #202A44; */
  background-image: url(https://www.amnh.org/var/ezflow_site/storage/images/media/amnh/images/explore/ology-images/astronomy/the-milky-way-galaxy/sombrero-galaxy/4967547-1-eng-US/sombrero-galaxy.jpg);
`;

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  background-size: cover;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px;
  color: #c5b4e3;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
`;

export const CardContainer = styled.section`
  width: 80%;
  min-height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
 
`;

export const Footer = styled.footer`
width:100%;
height:10vh;
background-color:#C5B4E3;
display:flex;
flex-direction:row;
justify-content:space-evenly;
align-items:center;
color: black;
`

export const Image = styled.img`
width:2rem;
height:2rem;
`

export const MainContainer = styled.main`
width: 100%;
min-height: 100%;
display: flex;
flex-direction: row;



`