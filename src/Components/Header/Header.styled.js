import styled from "styled-components"

export const HeaderContainer = styled.header`
/* border: 2px solid black; */
display: flex;
justify-content: space-between;
height: 5.5em;
font-size: 1.5em;
background: rgb(9,4,11);
background: linear-gradient(6deg, rgba(9,4,11,1) 0%, rgba(118,120,149,1) 50%, rgba(235,225,212,0.5911165730337078) 100%);
    align-items: center;
h1{
    font-family: 'Courier New', Courier, monospace;
   width: 12em;
}

button {
    background-color: orange;
    width: 3.5em;
    height: 3.5em;
    border-radius: 10%;
    border: none;
    margin: 1em;
    

:hover {
    cursor: pointer;
    filter: brightness(1.1);
}

:active {
    filter: brightness(0.95)
}
}

.ButtonSpaceTrip{
    width: 5.5em;
    height: 5.5em;
    margin: 0.4em;
    margin-left: 5em;
    border-radius: 50%;

}

.LogoSpaceTrip{
    width: 5.5em;
    height: 5.5em;
    border-radius: 50%;
    
}

.placeholderHeader{
    border: none;
    width: 17.5em;
    height: 2.5em;
    margin: auto 0;
    font-size: 0.5em;
   
    
}
.placeholderContainer{
    display:flex;
    justify-content:center ;
    margin: 1.5em;

}
.cartIconContainer {
   margin-left: 25em;
 

}
.ButtonContainer{
    display:flex;
    width: 40.5em;
}


/* .lupIconContainer{
    background-color: green;
} */
`