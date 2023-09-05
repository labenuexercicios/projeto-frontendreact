import { createGlobalStyle } from "styled-components";

const Base = createGlobalStyle` 
		
	:root{
        --fontPadrao: 'Oswald',sans-serif;
        --colorSvg: invert(56%) sepia(75%) saturate(2848%) 
        hue-rotate(358deg) brightness(99%) contrast(89%);
    }        

  	body{
    max-width: 100%;
		min-height: 100vh;
    margin: 0 auto;
    font-family: var(--fontPadrao);

    @media(max-width:768px){
      /* body::-webkit-scrollbar {
        display: none;
      } */
      ::-webkit-scrollbar{
        display: none;
      }
    }
      
	}

`
export default Base;
