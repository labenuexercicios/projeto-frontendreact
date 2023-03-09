import React from 'react';
import styled from 'styled-components'


export const FooterCtn = styled.ul`
display: flex;

flex-flow: row wrap;
height: 100%;
max-height: 10vh;
width: 100%;
justify-content: center;
align-content: flex-end;
`

export const IconsList = styled.li`
width: 50%;
align-self: center;

a{
  font-size: 0.8rem;
  
}

`
export const IconsAnchor = styled.a`
width: 20%;
align-self: center;

`
export const Footer1 = styled.footer`

  width: 100%;
  height: 100%;
margin-bottom:2rem;
  background-color: rgb(10, 0, 32);
color: #48ff00;
  text-align: center;
  align-self: flex-end;
  border-radius: 5px ;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  -webkit-border-radius: 25px ;
  -moz-border-radius: 25px ;
  -ms-border-radius: 25px ;
  -o-border-radius: 25px ;
  justify-content: space-around;
max-height: 10vh;

a {
  width: 100%;
  background: #48ff00;
  padding: 0.62rem;
  color: brown;
  font-weight: bolder;
  border-radius: 15px;
}

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
width: 100%;
height: 55px;
justify-content: space-around;
align-items: center;
align-self: center;
border-bottom: 1px solid #fff;
box-shadow: 5px 0 10px rgba(0, 0, 0, .6);
top: 0;
left: 0;
position: fixed;

font-weight: bolder;
font-size: 1.4rem;
border-left: 4px solid rgb(6, 43, 0);
border-radius: 15px;
-webkit-border-radius: 15px;
-moz-border-radius: 15px;
-ms-border-radius: 15px;
-o-border-radius: 15px;
list-style-type: none;
`
