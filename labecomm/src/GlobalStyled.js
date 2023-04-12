import styled,{ createGlobalStyle } from "styled-components";



const GlobalStyle = createGlobalStyle`
  
`;

export default GlobalStyle;
export const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 16px;
  gap: 8px;
  background-image: url("http://getwallpapers.com/wallpaper/full/c/e/6/320156.jpg");
  background-repeat: no-repeat;
  background-size:cover;
`;