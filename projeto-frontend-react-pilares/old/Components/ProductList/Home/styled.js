import React, {components} from 'react'
import styled from  'styled-components' 

export const HomeCtn1 = styled.div`

display: flex;
flex-flow: column wrap;
border: 2px groove #0f0c0d;
width: 20%;
align-self: center;
justify-content: space-around;
background: var(--gray-300);
min-width: 269px;
margin: 10px auto;
padding: 1rem;
@media screen and (max-width: 769px){
    width: 80%;
    min-width: 200px;
    margin: 10px auto;
`

export const Homecard2 = styled.div`

display: flex;
flex-flow: column wrap;
border: 2px groove #0f0c0d;
width: 100%;
align-self: center;
justify-content: space-around;
background: var(--gray-300);
min-width: 269px;
max-width: calc(100% * 75%);
margin: 10px auto;
padding: 2rem;
@media screen and (max-width: 769px){
    width: 100%;
    max-width: 200px;
    margin: 10px auto;
`
export const TitleCategory = styled.h2`
display: inline;
width: 100%;
background: red;
color: white;
height: 4vh;
font-size: 2rem;
`
export const HomeCtn4 = styled.div`
display: flex;
flex-flow: row wrap;
border: 2px groove #0f0c0d;
width: 30%;
align-self: center;
justify-content: space-around;
background: var(--gray-300);
max-width: 369px;
margin: 10px auto;
padding: 2rem;
@media screen and (max-width: 769px){
    width: 100%;
    max-width: 200px;
    margin: 10px auto;
`

export const Homecard= styled.div`
display: flex;
flex-flow: column wrap;
border: 2px groove #0f0c0d;
width: 70%;
align-self: center;
justify-content: space-around;
background: var(--gray-300);
min-width: 269px;
margin: 10px auto;
padding: 2rem;
@media screen and (max-width: 769px){
    width: 80%;
    max-width: 600px;
    margin: 10px auto;
`
export const HomeCtn3= styled.div`
display: flex;
flex-flow: column wrap;
border: 2px groove #0f0c0d;
width: 50%;
align-self: center;
justify-content: space-around;
background: var(--gray-300);
max-width: 369px;
margin: 10px auto;
padding: 2rem;
@media screen and (max-width: 769px){
    width: 50%;
    max-width: 200px;
    margin: 10px auto;
`




export const CircleDiv = styled.div`
width: 100px;
height: 100px;
border: 4px dashed gold;
border-radius: 100%;
overflow: hidden;
background: var(--gray-900);
margin: 10px auto;

`

export const CircleImg = styled.img`
max-width: 100px;
max-height: 100px;
overflow: hidden;
object-fit: cover;
`