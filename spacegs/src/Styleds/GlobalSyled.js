import styled from "styled-components";

export const GlobalSyled = styled.div`

background-color: black;

display: flex;

@keyframes fundoAnimado {

0%{
  background-position: 0 0, 0 0;
}

50%{
  background-position: 50% 0, 50% 0;
}

100%{
  background-position: 100% 0, 100% 0;
}



};

background-image: url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg"),  url("https://fixthephoto.com/images/content/starry-night-sky-png-61616514258.jpg");
animation: fundoAnimado 200s linear infinite;
background-repeat: repeat-x, repeat-x repeat;


`