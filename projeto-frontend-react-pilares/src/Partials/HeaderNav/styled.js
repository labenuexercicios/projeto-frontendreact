import React from 'react';
import styled from 'styled-components'


export const HeaderCtn = styled.div`
display: flex;
flex-flow: column wrap;
width: 90%;
left: 5%;
right: 5%;
list-style-type: none;
display: flex;
max-height: 60px;

justify-content: flex-end;
`

export const NavButton = styled.button`
width: 100px;
height: 40px;
background: navy;
color: white;
margin-top: 10px;
border-radius: 16px;
`


export const NavLogo = styled.img`
display: inline-block;
    width: 30%;
    height: 60px;
    align-self: flex-start;

`


export const NavBrand = styled.h1`
    font-size: 1rem;
    color: black;

    display: inline-block;

`

export const NavList = styled.ul`
  display: flex;
  position: fixed;
  flex-flow: row wrap;
  width: 90%;
  top:0;
  left: 5%;
right: 5%;

  height: 100%;
  height: 100%;
  background-color: rgb(10, 0, 32);
color: #48ff00;
  text-align: center;
  align-self: center;
  border-radius: 5px ;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  -webkit-border-radius: 25px ;
  -moz-border-radius: 25px ;
  -ms-border-radius: 25px ;
  -o-border-radius: 25px ;
justify-content: space-around;
max-height: 7vh;
`


export const Box1 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`

export const Box2 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`

export const Box3 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
      display: flex;
    width: 70%;
    background-color: #ffdc00;
    height: 100%;
    padding: 2rem;
`
export const Box4 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`
export const Box5 = styled.div`
  border: 2px solid red;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  justify-content: space-around;
  text-align: center;
`

export const Hero = styled.header`
display: flex;
flex-flow: row wrap;
align-self: flex-start;
justify-content: center;
align-content: center;
width: 100%;
border-radius: var(--roundedMedium);
min-height: 200px;
line-height: 220px;
color: white;
text-shadow: 0px 0px 5px #444;
/*DEGRADADO CSS*/
background: rgb(2,0,36);
background: var(--gradient-header);
}
`