import{createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}

html{
    font-family: sans-serif;
}
#root {
    padding: 1em;
    background: rgb(9,4,11);
    background: linear-gradient(6deg, rgba(9,4,11,1) 0%, rgba(118,120,149,1) 50%, rgba(235,225,212,0.5911165730337078) 100%);
     /* margin: 0 auto; */
    /* max-width: 1200px; */
}

`