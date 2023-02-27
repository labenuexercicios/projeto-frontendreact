import React from 'react';
import styled from 'styled-components'


export const FooterCtn = styled.ul`
display: flex;
flex-flow: row wrap;
height: 100%;
max-height: 10vh;
width: 100%;
justify-content: center;
align-content: center;
`

export const IconsList = styled.li`
width: 20%;
align-self: center;

`
export const IconsAnchor = styled.a`
width: 20%;
align-self: center;

`
export const Footer1 = styled.footer`
width: 100%;
height: 40px;
background: navy;
color: white;

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
background: rgb(18, 254, 108);
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
