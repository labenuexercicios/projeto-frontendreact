import styled from "styled-components";


export const Container  = styled.section`
    display: grid;
    height: 100%;
    min-height: 700px;
    width: 100%;
    grid-template-columns: 1fr 3fr 1fr;
    margin-top: 80px;   
    @media screen and (max-device-width: 1000px) 
    {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media screen and (max-device-width: 700px) 
    {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 0fr;
    }
`

export const DivMain = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column-reverse; 
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-start;
    padding-bottom: 30px;
    padding-right: 0px;
    @media screen and (max-device-width: 1000px) 
    {
    //flex-direction: column;
    //align-items: center;
    }
    @media screen and (max-device-width: 700px) 
    {
        justify-content: center;
        align-items: center;
        min-height: 85vh;
    }
`

export const DivItens = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`

export const DivNoResults = styled.div`
    padding: 30px 30px 30px 30px;
`

export const BottomMenu = styled.div`
    position: fixed;
    bottom: 0;
    left:0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 8vh;
    background-color: white;
    border: 1px solid black;
    z-index:1;
    @media screen and (min-device-width: 700px) 
    {
    display:none;
    }
`

export const MenuButtonLupa = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
`

export const MenuButtonCart = styled.section`
    display: flex;
    justify-content: center;
`

export const FilterIcon = styled.button`
//padding: 8px 8px 8px 8px;
    background-color: black;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    img
    {
        height: 5vh;
        width: auto;
        border-radius: 50px;
    }
`

export const CartIcon = styled.button`
    padding: 8px 8px 8px 8px;
    background-color: white;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    img
    {
        height: 5vh;
        width: auto;
    }
`

export const SectionBusca = styled.section`
    display: flex;
    align-items: center;
    margin: 20px 5px 20px 5px;
    background-color: #E0EEEE;
    border: solid 1px #5F9EA0;
    border-radius: 10px;
    width: 18vw;
    height: 41px;
    @media screen and (max-device-width: 1000px)
    {
        width: 70vw;
    }
    @media screen and (min-device-width: 700px) 
    {
        display: none;
    }
    img
    {
        border-radius: 10px;
        float: left;
        width: auto;
        height: 40px;
    }
    input
    {
        float: left;
        background-color: transparent;
        padding-left: 5px;
        font-size: 12px;
        border: none;
        height: 50px;
        width: 9vw;
        @media screen and (max-device-width: 1000px) 
        {
            width: 40vw;
        }
    }
    button
    {
        border: none;
        float: right;
        height: 40px;
        border-radius: 10px;
        width: 10vw;
        font-weight: bold;
        background: #5F9EA0;
        font-size: 14px; 
        @media screen and (max-device-width: 1000px) 
        {
            width: 28vw;
        }
    }
`
