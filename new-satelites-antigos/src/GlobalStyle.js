import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    overflow-x: hidden;
    font-family: system-ui;
    ::-webkit-scrollbar-track {
    background: #101010; 
    };
    ::-webkit-scrollbar{
    width: 8px;
    };
    ::-webkit-scrollbar-thumb {
    background: #505050; 
    border-radius: 10px;
    };
    ::-webkit-scrollbar-thumb:hover {
    background: gray; 
    }
  }
`