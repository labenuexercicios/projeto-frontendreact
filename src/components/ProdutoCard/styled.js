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
export const SectionFilter = styled.section`
width: 600px;
margin: 10px;
    >div{
        height: 350px;
        width: 350px;
        border: 2px solid #6C7070;
        padding: 0 20px;

        >*{
            margin-top: 30px;
        }
        
        > .search{
        margin-right: 20px;

        > input{
            margin-left: 10px;
            height: 24px;
            width: 200px;
            border-radius: 8px;
            border: 0;
            box-shadow: -1px 2px 17px 1px rgba(0,0,0,0.43);
            padding: 4px;
        }
    }
    }
`
export const TituloFilter = styled.h1`
display: flex;
justify-content: center;
align-items: center;
color: #6C7070;
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

    >span{
        > button {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 35px;
            height: 35px;
            border: none;
            >img{
                width: 30px;
                height: 30px;
            }
        }
    }
`

export const Select = styled.select`
    margin-left: 10px;
    height: 24px;
    width: 200px;
    border-radius: 8px;
    border: 0;
    box-shadow: -1px 2px 17px 1px rgba(0,0,0,0.43);
    padding: 4px;`


