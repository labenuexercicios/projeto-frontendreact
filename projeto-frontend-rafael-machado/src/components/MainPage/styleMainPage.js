import styled from "styled-components"


export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    justify-content: center;
    
    
    
`
export const ContainerCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;  
    width : 70% ;
    
    `

export const Card = styled.div`
    border: 1px solid #EAEAEA;
    border-radius: 8px;
    height: 400px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: gray;
    
    div:first-child{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 60%;
        border-radius: 8px 8px 0 0;
        img{
            height: 180px;
            width: auto;
            max-width: 100%;
        }
    }
    div:last-child{
        height: 40%;
        border-radius: 0 0 8px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        span{
            font-size: 12px;
            width: 90%;
            text-align: center;
        }
        h3{
            font-size: 20px;
            color: orange;
        }
        button{
            background-color: orange;
            border-radius: 8px;
            color: white;
            width: 200px;
            height: 40px;
            border: none;
            font-weight: bold;
            transition: transform .3s;
            margin-bottom: 5px;
        }
        button:hover{
            cursor: pointer;
            background-color: orange;
            font-weight: light;
            transform: scale(1.1)
        }
    }
    :hover{
        border: orange 2px solid;
    }
`


