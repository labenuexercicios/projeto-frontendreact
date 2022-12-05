import styled from "styled-components";

export const MainContainer = styled.main`
display: flex;
padding-bottom: 30px;
    button{
        :hover {
            cursor: pointer;
        }
        :active {
            filter: brightness(0.95);
            border-radius: 30%;
        }
    }

`
export const SectionContainer = styled.section`
display:flex;
justify-content: space-around;
flex-wrap: wrap;
`
export const SectionImg = styled.img`
    height: 300px;
    width: 300px;
    border-bottom: 2px solid #6C7070;
    padding-top: 20px;
`
export const Card = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    border: 2px solid #6C7070;
    height: 380px;
    width: 300px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    margin: 16px;
    box-shadow: -5px 12px 20px 1px rgba(0,0,0,0.43);

        >.section-name{
            width: 280px;
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
            margin-left: auto 0;

            >span{
                font-size: 14px;
                font-weight: bold;
                color: #6C7070;

                >h1{
                    font-style: oblique;
                }
            }
        }
`
export const SectionThings = styled.div`
    width: 280px;
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: bold;
    color: #6C7070;
    margin-bottom: 10px;
    align-items: center;
`
export const SpanBotao = styled.span`
display: flex;
justify-content: space-around;
> button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        border: none;
        > img{
            width: 30px;
            height: 30px;
        }
    }
`

export const Quant =styled.p`
    color: #6C7070;
    font-style: oblique;
    font-weight: bold;
    display: flex;
    justify-content: center;
    padding-top: 8px;
`

export const AddRemove = styled.div`
display: flex;
justify-content: space-between;
width: 280px;
padding-bottom: 20px;
`

export const SectionSoma = styled.section`
margin: 10px;
min-height: 300px;
width: 400px;
border: 2px solid #6C7070;
padding: 20px;
margin-left: auto;
`
export const TituloSoma = styled.h1`
display: flex;
justify-content: center;
align-items: center;
color: #6C7070;
`

export const ContaSoma = styled.p`
    color: #6C7070;
    font-style: oblique;
    font-weight: bold;
    padding-top: 20px;
    font-size: 16px;
`
