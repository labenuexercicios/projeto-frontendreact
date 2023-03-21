import { createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --soft-white: #f2f2f2;
        --green: #8bcf21;
        --yellow: #ffcb16;
        --dark: #383b40;
        --deep-blue: #011640;
        --deep-blue-secondary: #010f2b;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body{
        background: var(--deep-blue)
    }

    main{
        display:flex;
        justify-content: space-between;
        padding: 1rem;
    }

    h1{
        font-family: 'Jolly Lodger', cursive;
        color: var(--yellow);
        font-size: 5em;
    }

    h2{
        font-family: 'Shrikhand', cursive;
        color: var(--yellow);
    }

    p{
        font-family: 'Shrikhand', cursive;
        color: var(--green)
    }





`