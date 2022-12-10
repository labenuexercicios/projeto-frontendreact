import styled from "styled-components";

export const Container = styled.div`
    &{
 cursor: pointer;
 width: 190px;
 height: 254px;
 background: rgb(255, 255, 255);
 border-radius: 5px;
 border: 1px solid rgba(0, 0, 255, .2);
 transition: all .2s;
 box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .2);
}

&:hover {
 box-shadow: -12px 12px 2px -1px rgba(0, 0, 255, .2);
}

`

export const ShoeImg = styled.img`
    width: 150px;
    height: 150px;
    margin-left:15px;
`

export const ShoeName = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
 font-size: 0.9em;
 font-weight: 800;
`

export const ShoeSize = styled.span`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
 font-size: 0.9em;
`

export const ShoePrice = styled.h1`
    text-align:center;
`