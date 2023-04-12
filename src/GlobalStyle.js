import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --details: #0B3D91;
        --charcoal: #434242;
        --dark-beige: #DFD3C3;
        --beige: #F3EFE0;
        --sage: #698269;
        --off-white: #f5f5f5;
        --maroon: #A84448;
        --light-blue: #39719e;


        --title: 'Orbitron', sans-serif;
        --text: 'Playfair Display', serif;
        --sub-title: 'Exo 2', sans-serif;

        background-color: #422d2b;
        background-image: url("./images/tile.png");
        
        .App {
            max-width: 1868px;
            margin: auto;
        }

        p, label {
            color: var(--charcoal);
            font-family: var(--text);
            font-weight:600;
        }

        a {
            color: var(--beige);
            font-family: var(--text);
            font-size:20px;
        }

        h2 {
            font-family: var(--sub-title);
            color: var(--details);
            font-size: 20px;
            margin-bottom:20px;
        }

        input, select {
            background: none;
            border: none;
            margin-bottom: 0;
            font-size:15px;
            color: var(--charcoal);
            font-family: var(--text);
            background-color: var(--beige);
        }

        .store {
            display:flex;
            justify-content: space-between;
            height: 100%;
        }

        .inactive {
            display: none;
        }
        }
    
        /* CSS Reset */

    html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }        
        
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        input[type=number] {
        -moz-appearance: textfield;
        }

`;
