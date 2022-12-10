import { createGlobalStyle } from "styled-components";

import TomatoRegular from './TomatoRegular.ttf';

export default createGlobalStyle`
    @font-face{
        font-family: 'Tomato Regular';
        src: local('Tomato Regular'),
        url(${TomatoRegular}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
`